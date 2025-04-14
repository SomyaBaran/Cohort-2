// til now we were using callback functions , promises --> but this only made things ugly --> a better way to do it -> await

function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there!")
        }, 2000)
    })
    return p;
}
async function main(){
    let value = await kiratsAsyncFunction();
    console.log(value)
}
main();


//remember you cant do this ---> because await should be wrapped inside async function

// function kiratsAsyncFunction(){
//     let p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("hi there!")
//         }, 2000)
//     })
//     return p;
// }
//     let value = await kiratsAsyncFunction();
//     console.log(value);