const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { exit, stdin, stdout } = process;

const directoryPath = path.join(__dirname, 'text.txt');
const input = readline.createInterface(stdin);
const output = fs.createWriteStream(directoryPath);

stdout.write('Welcome!\nYou can type your text here.\n\n');

function finish() {
  stdout.write('\nIt was great! Goodbye.\n');
  exit();
}

input.on('line', (text) => {
  if (text === 'exit') finish();

  output.write(`${text}`);
});

process.on('SIGINT', finish);