const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const { sync: rimraf } = require('rimraf');

const path = require('path');

const reAssets = /\.(png|jpg|jpeg|gif|woff|woff2|ttf|otf|eot|wav|mp3)$/;
const staticAssetName = 'media/[name].[hash:8].[ext]';
const dist = __dirname + '/dist';
const getStyleLoaders = (
  isProduction = false,
  isHot = false,
  name = 'wsr',
  experimentalRtlCss = false,
) => {
  const reStyle = /\.(css|less|scss|sass)$/;
  const localIdentName = {
    short: '[hash:base64:5]',
    long: '[path][name]__[local]__[hash:base64:5]',
  };
  const cssLoaderOptions = {
    camelCase: true,
    sourceMap: true,
    localIdentName: isProduction ? localIdentName.short : localIdentName.long,
    // Make sure every package has unique class names
    hashPrefix: name,
    modules: true,
    // PostCSS, less-loader, sass-loader and resolve-url-loader, so
    // composition will work with import
    importLoaders: 4,
  };

  return [
    {
      test: reStyle,
      exclude: /\.st\.css$/,
      rules: [
        ...(isHot
          ? [{ loader: 'yoshi-style-dependencies/css-hot-loader' }]
          : []),
        {
          loader: 'yoshi-style-dependencies/style-loader',
          options: {
            // Reuses a single `<style></style>` element
            singleton: true,
          },
        },
        {
          oneOf: [
            // Files ending with `.global.(css|sass|scss|less)` will be transpiled with
            // `modules: false`
            {
              test: /\.global\.[A-z]*$/,
              loader: 'yoshi-style-dependencies/css-loader',
              options: {
                ...cssLoaderOptions,
                modules: false,
              },
              sideEffects: true,
            },
            {
              loader: 'yoshi-style-dependencies/css-loader',
              options: cssLoaderOptions,
            },
          ],
        },
        {
          loader: 'yoshi-style-dependencies/postcss-loader',
          options: {
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: [
              experimentalRtlCss && require('postcss-rtl')(),
              require('autoprefixer')({
                overrideBrowserslist: [
                  '> 0.5%',
                  'last 2 versions',
                  'Firefox ESR',
                  'not dead',
                  'ie >= 11',
                ].join(','),
                flexbox: 'no-2009',
              }),
            ].filter(Boolean),
            sourceMap: true,
          },
        },
        {
          loader: 'yoshi-style-dependencies/resolve-url-loader',
        },
        {
          test: /\.(scss|sass)$/,
          loader: 'yoshi-style-dependencies/sass-loader',
          options: {
            sourceMap: true,
            // implementation: importCwd.silent(
            //   'yoshi-style-dependencies/node-sass',
            // ),
          },
        },
      ],
    },
  ];
};

const webpackClean = folder => ({
  folder,
  apply(compiler) {
    compiler.hooks.beforeRun.tap('clean dist', () => {
      try {
        rimraf(this.folder);
      } catch (e) {}
    });
  },
});

/** @type import('webpack').Configuration */
const config = {
  mode: 'development',
  // mode: 'production',
  entry: './index.js',
  devtool: false,
  context: path.join(__dirname, '..', 'src'),
  output: {
    path: dist,
    library: 'wsr',
    libraryTarget: 'umd',
  },
  externals: {
    // react: {
    //   amd: 'react',
    //   commonjs: 'react',
    //   commonjs2: 'react',
    //   root: 'React',
    // },
    // 'react-dom': {
    //   amd: 'reactDOM',
    //   commonjs: 'react-dom',
    //   commonjs2: 'react-dom',
    //   root: 'ReactDOM',
    // },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: require.resolve('babel-loader'),
        options: require('../babel.config')({
          env() {
            return false;
          },
        }),
      },
      {
        test: reAssets,
        loader: 'url-loader',
        options: {
          name: staticAssetName,
          limit: 10000,
        },
      },
      {
        oneOf: [
          {
            test: /\.inline\.svg$/,
            loader: 'svg-inline-loader',
          },
          {
            test: /\.svg$/,
            issuer: {
              test: /\.(j|t)sx?$/,
            },
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  svgoConfig: {
                    plugins: {
                      removeViewBox: false,
                    },
                  },
                },
              },
              {
                loader: 'svg-url-loader',
                options: {
                  iesafe: true,
                  noquotes: true,
                  limit: 10000,
                  name: staticAssetName,
                },
              },
            ],
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  iesafe: true,
                  limit: 10000,
                  name: staticAssetName,
                },
              },
            ],
          },
        ],
      },
      ...getStyleLoaders(),
    ],
  },
  plugins: [
    // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
    new StylableWebpackPlugin({
      outputCSS: false,
      includeCSSInJS: true,
      optimize: {
        classNameOptimizations: false,
        shortNamespaces: false,
        removeUnusedComponents: false,
      },
    }),
    webpackClean(dist),
  ],
};
module.exports = config;
