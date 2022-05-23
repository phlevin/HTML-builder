const fs = require('fs');
const path = require('path');

const rf = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

let data = '';
rf.on('data', chunk => data += chunk);
rf.on('end', () => console.log(data));
rf.on('error', err => console.log('Error: ', err.message));
