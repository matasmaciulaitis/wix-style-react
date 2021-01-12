const ts = require('typescript');
const prettier = require('prettier');
const { basename } = require('path');
const { isExportDeclaration, createSourceFile, sys } = ts;

createDynamicIndexFile();

async function createDynamicIndexFile() {
  const indexSource = sys.readFile('./src/index.js', 'utf8');

  const sourceFile = createSourceFile(
    'index.js',
    indexSource,
    ts.ScriptTarget.ESNext,
  );

  const prettierConfig = await prettier.resolveConfig();

  sys.writeFile(
    './src/index.dynamic.js',
    prettier.format(createDynamicIndexSource(sourceFile), {
      parser: 'babel',
      ...prettierConfig,
    }),
  );
}

function getChunkName(elements, from) {
  const defaultName = elements.find(
    ({ propertyName }) => propertyName === 'default',
  );
  if (defaultName) {
    return defaultName.name;
  }

  if (elements.length === 1) {
    return elements[0].name;
  }

  return basename(from);
}

function createDynamicIndexSource(sourceFile) {
  const exports = findReExports(sourceFile);
  const dynamicExports = [];
  for (const { elements, from } of exports) {
    const chunkName = getChunkName(elements);
    for (const { name, propertyName } of elements) {
      dynamicExports.push(
        `export const ${name} = async ()=> (await import(/* webpackChunkName: "${chunkName ||
          name}" */${JSON.stringify(from)})).${propertyName || name}`,
      );
    }
  }
  return dynamicExports.join('\n');
}

function findReExports(sourceFile) {
  const exports = [];
  sourceFile.forEachChild(node => {
    if (isExportDeclaration(node)) {
      exports.push(processExport(node));
    }
  });
  return exports;
}

function processExport({
  exportClause: { elements },
  moduleSpecifier: { text },
}) {
  return {
    from: text,
    elements: elements.map(({ propertyName, name }) => {
      if (propertyName) {
        propertyName = propertyName.escapedText;
      }
      if (name) {
        name = name.escapedText;
      }
      return { propertyName, name };
    }),
  };
}
