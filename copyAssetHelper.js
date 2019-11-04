const fsExtra = require('fs-extra');
const path = require('path');
const buildFolder = path.resolve(__dirname, '.', 'client/build');

fsExtra.copy(`${path.resolve('.')}/client/src/assets`, `${buildFolder}/assets`, err => {
  if (err) return console.error(err)
  console.log("Copy assets successfully!")
});
