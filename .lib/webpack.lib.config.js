const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const { resolveNamespace } = require('@stylable/node');
const webpack = require('webpack');
const { sync: rimraf } = require('rimraf');

const path = require('path');
const fs = require('fs');

const reAssets = /\.(png|jpg|jpeg|gif|woff|woff2|ttf|otf|eot|wav|mp3)$/;
const staticAssetName = 'media/[name].[hash:8].[ext]';
const dist = __dirname + '/dist';
const context = path.join(__dirname, '..', 'src');

// const dirChunks = new Set(
//   fs
//     .readdirSync(context, { withFileTypes: true })
//     .filter(x => x.isDirectory())
//     .map(({ name }) => name),
// );

const wsrStylableNamespaceFactory = () => {
  const s = new Set();
  return (ns, path) => {
    let outNS;
    if (path.includes('wix-ui-core')) {
      outNS = 'wuc' + ns;
    } else {
      outNS = 'wsr' + ns;
    }
    if (s.has(outNS)) {
      const m = path.match(/wix-style-react[\\/]src[\\/](.*?)[\\/]/);
      if (m) {
        outNS = 'wsr' + m[1] + ns;
      }
      if (s.has(outNS)) {
        outNS = resolveNamespace(ns, path);
        console.error(ns, path);
      }
    }
    s.add(outNS);
    return outNS;
  };
};

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
  // mode: 'development',
  mode: 'production',
  entry: './index.js',
  devtool: 'source-map',
  context,
  output: {
    path: dist,
    library: 'wsr',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: 'React',
      'react-dom': 'ReactDOM',
      // Wix: 'Wix',
    },
  ],
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
  optimization: {
    splitChunks: {
      automaticNameMaxLength: 180,
      chunks: 'async',
      minSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 100,
      maxInitialRequests: 100,
      enforceSizeThreshold: 0,
      cacheGroups: {
        vendors: false,
        defaultVendors: false,
        default: {
          // name(module, chunks, cacheGroupKey) {
          //   const match =
          //     module.resource &&
          //     module.resource.match(/wix-style-react[\\/]src[\\/](.*?)[\\/]/);

          //   if (match && dirChunks.has(match[1])) {
          //     return match[1];
          //   }
          //   const allChunksNames = chunks.map(item => item.name).join('~');
          //   return resolveNamespace(cacheGroupKey, allChunksNames);
          //   // return `${cacheGroupKey}-${allChunksNames}`;
          // },
          enforce: true,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new StylableWebpackPlugin({
      outputCSS: false,
      includeCSSInJS: true,
      optimize: {
        classNameOptimizations: false,
        shortNamespaces: false,
        removeUnusedComponents: false,
      },
      resolveNamespace: wsrStylableNamespaceFactory(),
    }),
    webpackClean(dist),
  ],
};
module.exports = config;
