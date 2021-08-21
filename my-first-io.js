const fs = require('fs');

let bufferObj = fs.readFileSync(process.argv[2], "utf-8");

let line = bufferObj.split('\n').length - 1;

console.log(line);