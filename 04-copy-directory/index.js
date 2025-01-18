const fs = require('fs').promises;
const path = require('path');
const { stdout } = require('process');

async function folderRecovery(folderCopying) {
  await fs.rm(folderCopying, { recursive: true, force: true });
  await fs.mkdir(folderCopying, { recursive: true });
}

async function copyFiles(folderOrigin, folderCopying) {
  fs.readdir(folderOrigin, { withFileTypes: true }).then((files) => {
    files.forEach(async (file) => {
      const pathAtFile = path.join(folderOrigin, file.name);
      const pathAtFileCopy = path.join(folderCopying, file.name);
      if (file.isFile()) {
        fs.copyFile(pathAtFile, pathAtFileCopy);
      }
    });
  });
}

async function copyDir() {
  const directoryPath = path.join(__dirname, 'files');
  const directoryPathCopy = path.join(__dirname, 'files-copy');

  try {
    await folderRecovery(directoryPathCopy);
    await copyFiles(directoryPath, directoryPathCopy);
    stdout.write('\nData copying completed\n\n');
  } catch (error) {
    console.log(error);
  }
}

copyDir();