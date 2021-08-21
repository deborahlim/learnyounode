let http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    let totalNum = 0;
    let totalData = '';
    res.on('data', (data) => {
        totalData += data;
    })
    res.on('end', () => {
        try {
            console.log(totalData.length);
            console.log(totalData);
        }
     catch(e) {
         console.error(e.message);
     }
    })
}).on('error', (e) => console.error(e.message));
