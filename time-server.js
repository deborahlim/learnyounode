const net = require('net');
const server = net.createServer((socket) => {
    // write data to socket and end socket
    let currentDate = new Date();
    let formattedDate = `${currentDate.getFullYear()}-0${currentDate.getMonth()+1}-${currentDate.getDate()} 0${currentDate.getHours()}:${currentDate.getMinutes()}\n`
    socket.end(formattedDate);
})

server.listen(Number(process.argv[2]));