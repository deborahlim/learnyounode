let http = require('http');

// create empty array to store the data
let results = [];
let count = 0;
// function to print results
function printResults() {
    for(let i=0; i< 3; i++) {
        console.log(results[i]);
    }
}

// function to get data and store in results array
function httpGet(index) {
    http.get(process.argv[2+index], (res) => {
        res.setEncoding('utf8');
        totalData=""
        res.on('data', (data) => {
            totalData += data;
        })
        res.on('end', () => {
            try {
                results[index] = totalData;
                count++;

                if(count === 3) {
                    printResults();
                }
            }
            catch (e) {
                console.error(e.message);
            }
        })
    })
}

// function to loop through Command line urls
for(let i = 0; i < 3; i++) {
    httpGet(i);
}


