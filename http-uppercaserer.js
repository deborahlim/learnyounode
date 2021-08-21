let http = require('http');

let map = require('through2-map');

const server = http.createServer( (req,res) => {
   if(req.method !== "POST") {
       return res.end('send me a POST\n')
   }
    req.pipe(map((chunk) => chunk.toString().toUpperCase()
    )).pipe(res);
});
server.listen(Number(process.argv[2]));
