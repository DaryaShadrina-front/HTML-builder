const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, 'text.txt');
const readFileTxt = fs.createReadStream(directoryPath);
readFileTxt.on('data', (chunk) => console.log(chunk.toString()));