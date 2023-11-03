const fs = require('fs');
const path = require('path');

const srcDirectory = path.join(__dirname, ''); // Chemin vers le dossier src
const indexPath = path.join(__dirname, 'src', 'index.js'); // Chemin du fichier index.js

function getFilesRecursively(directory) {
  const files = [];

  function walk(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const itemPath = path.join(dir, item);
      if (fs.statSync(itemPath).isDirectory()) {
        walk(itemPath);
      } else {
        files.push(itemPath);
      }
    });
  }

  walk(directory);
  return files;
}

function generateImports(files) {
  const importStatements = files.map(file => `import './${path.relative(srcDirectory, file).replace(/\\/g, '/')}';`);
  return importStatements.join('\n');
}

function updateIndexFile() {
  const files = getFilesRecursively(srcDirectory);
  const importContent = generateImports(files);

  // Écriture des importations dans le fichier index.js
  fs.writeFileSync(indexPath, importContent);

  console.log('Importations générées avec succès dans index.js');
}

updateIndexFile();


// npm run build