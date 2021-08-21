let fs = require('fs');
let path = require('path');

let callBack = (err, list) => {
if(err){return console.log("Error reading file: ")} 

else {
    // for(let i of list)
    // {
    //     if (path.extname(i).slice(1) == process.argv[3]) {
    //         console.log(i);
    //     }
    // }
    list.forEach((i) => {
        if (path.extname(i).slice(1) == process.argv[3]) {
                    console.log(i);
                }
    })
}
}



fs.readdir(process.argv[2], "utf-8", callBack);