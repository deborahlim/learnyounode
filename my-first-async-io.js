fs = require('fs');

let callBack = (err, data) => {
    if(err) {
       return console.log('Error reading file');
    }
    console.log(data.split('\n').length - 1);
}

fs.readFile(process.argv[2], "utf-8", callBack);