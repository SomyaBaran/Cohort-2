// code without promises (ugly way)
const { promises } = require('dns');
const fs = require('fs');

function kiratsReadFile (cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data);
    })
}

function onDone(data){
    console.log(data)
}

kiratsReadFile(onDone)



// code with promises (cleaner way)
const fs = require('fs');
function kiratsReadFile(){
    return new Promise(function(resolve, reject){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        });
    });
}

function onDone(data){
    console.log(data);
}
kiratsReadFile().then(onDone);