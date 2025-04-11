// // Write a program to greet a person given their first and last name
// let firstName = "Somya";
// let lastName = "Baranwal";

// var Names = "hello " + firstName + lastName;
// console.log(Names)


// //Write a program that counts from 0-10 and prints (for loop)
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// //Write a program that counts from 0-10 and print the sum of it
// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//     sum = sum + i;
// }

// console.log(sum);

// //Write a program that greets a person based on their gender (if else)
// let names = "rishi";
// let gender = "male";

// if(gender === "male"){
//     console.log("Hello sir", names)
// }
// else{
//     console.log("Hello maam", names)
// }

// //Write aprogram that prints all the even numbers in an array
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for( let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i])
//     }
// }

// //Write a program to print the biggest number in an array
// let arry = [1,2,56,47,89,82,35,13,53];
// let biggest = arry[0]; // assume biggest array is 1 

// for(let i = 1; i < arry.length; i++){
//     if(arry[i] > biggest){
//         biggest = arry[i];
//     }
// }
// console.log(biggest)


// //Write a function that finds sum of two numbers 

// function sums(a,b){
//     let sumOfNumbers = a + b;
//     return sumOfNumbers;
// }
// var Sum = sums(3, 5);
// console.log(Sum)


// // Write a function that displays this result in preety format

// function calculateArithmetic(a, b, sumOfValue){
//     const ans = sumOfValue(a, b);
//     return ans;
// }

// function sum(a,b){
//     var result = "🧮 The sum of " + a + " and " + b + " is 👉 " + (a + b);
//     return result;
// }
// var value = calculateArithmetic(3, 5, sum);
// console.log(value)


// //create a counter in JavaScript (counts down from 30 to 0)

// for(let i = 30; i >= 0; i--){
//     console.log(i)
// }

// // Caluculate the time it takes between a setTimeout and the inner function actually running 

// let start = Date.now();

// setTimeout(function(){
//     let end = Date.now();
//     let timeTaken = end - start;
//     console.log("⏱ Time taken:", timeTaken, "ms");
// }, 1000)

// Create a terminal clock (HH:MM:SS)

setInterval(function(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        minutes = "0" + seconds;
    }
    console.log("time " + hours + ":" + minutes + ":" + seconds)
}, 1000);
