const fs = require('fs');
const AdmZip = require('adm-zip');
const packageJson = require('./package.json');

const zip = new AdmZip();
const zipFileName = `./build/${packageJson.name}.zip`

const includes = [
  'src',
  'index.js',
  'package.json',
  'node_modules'
]

includes.forEach(path => {
  const p = fs.statSync(path);
  if (p.isFile()) {
      zip.addLocalFile(path);
  } else if (p.isDirectory()) {
      zip.addLocalFolder(path, path);
  }
});

zip.writeZip(zipFileName);
