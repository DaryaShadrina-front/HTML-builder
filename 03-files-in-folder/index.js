const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'secret-folder');

fs.readdir(directoryPath, { withFileTypes: true }, (error, files) => {
  error ? console.log(error.message) : null;
  files.forEach((file) => {
    if (file.isFile()) {
      const pathAtFile = path.join(directoryPath, file.name);
      const fileName = path.parse(pathAtFile).name;
      const fileExt = path.parse(pathAtFile).ext.slice(1);
      fs.stat(pathAtFile, (error, stats) => {
        error ? console.log(error.message) : null;
        console.log(
          `${fileName}-${fileExt}-${(stats.size / 1024).toFixed(2)}kb`,
        );
      });
    }
  });
});