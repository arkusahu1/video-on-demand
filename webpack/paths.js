const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'client/build'),
  entryPath: path.resolve(__dirname, '../', 'client/src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'client/src/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
