const fs = require('fs');
const path = require('path');

const directoryStyles = path.join(__dirname, 'styles');
const directoryStylesFolder = path.join(__dirname, 'project-dist');

const directoryStylesBudle = path.join(directoryStylesFolder, 'bundle.css');
const BudleStream = fs.createWriteStream(directoryStylesBudle);

fs.readdir(directoryStyles, { withFileTypes: true }, (error, files) => {
  error ? console.log(error.message) : null;

  for (let file of files) {
    if (path.parse(file.name).ext.slice(1) === 'css' && file.isFile()) {
      const pathAtFile = path.join(directoryStyles, file.name);

      const readStyles = fs.createReadStream(pathAtFile);
      readStyles.pipe(BudleStream);
    }
  }
});