const fs = require('fs');
const path = require('path');

const { stdin, exit } = process;

const filePath = path.join(__dirname, 'textFile.txt');
const output = fs.createWriteStream(filePath);

console.log('Hello! Please enter the text!\n');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    exit();
  }
  output.write(data);
});

process.on('exit', () => console.log('Goodbye! Good luck!'));
process.on('SIGINT', exit);
