// CALL BACK FUNCTION
// Functional Arguments

function square(n){
    let sq = n * n
   return sq;
}
function cube(n){
    let cu = n * n * n;
    return cu;
}
function sumOfOperation(a, b, fn){
    return fn(a) + fn(b);
}
let ans = sumOfOperation(1, 2, cube);
console.log(ans);



// ASYNC FUNCTION

// readFile function
let a = 1;
console.log(a);
let fs = require("fs"); // --> module
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log("data read from the file is: ");
    console.log(data);
})

let answer = 0;
for(let i = 0; i < 100; i++){
    answer = answer = i;
}
console.log(answer);

// setTimeout function
console.log("hi there!")
setTimeout(function(){
    console.log("what are you doing babe!")
}, 5000);

let b = 0;
for(let i = 0; i < 10; i++){
    b = b + i;
}
console.log(b)
console.log("well see you later!")