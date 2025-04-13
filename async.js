// SetTime out --> async function

function findSum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans = ans + i;
    }
    return ans;
} 

function findSumTill100(){
    console.log(findSum(100));
}
setTimeout(findSumTill100,1000);
console.log("hello world")


// File system module 
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
        console.log(data);
})
console.log("hi there!")




console.log("hi there");
setTimeout(function(){
    console.log("from inside async function")
}, 5000);

let a = 0;
for(let i = 0; i < 10; i++){
    a = a + i;
}
console.log(a);



