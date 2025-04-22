// map, filter, arrow functions

/// Arrow function
const sum = (a, b) => {
    return a + b;
}
const arrAns = sum(2, 3);
console.log(arrAns); // 5


// PROBLEM STATEMENT
const myArray = (arr) => {
    const newArr = Array.from(arr);
    for(let i = 0; i < arr.length; i++){
        newArr[i] = newArr[i] * 2;
    }
    return newArr;
}
const arr = [1, 2, 3, 4, 5];
let ans = myArray(arr);
console.log(arr); // [1, 2, 3, 4, 5]
console.log(ans); // [2, 4, 6, 8, 10]


// Map Function --> transform arrays

const inputss = [1, 2, 3, 4, 5]; 
function transform(i){
    return i * 2;
}
const answer = inputss.map(transform);
console.log(answer); // [2, 4, 6, 8, 10]


//PROBLEM STATEMENT --> create a map function that takes 2 inputs --> an array and a transformation ccallback function --> and transforms the array into new one using the transformation function 

const input = [1, 2, 3, 4, 5];
function arr(input, transform){
    const newArr = Array.from(input);  //
    for(let i = 0; i < input.length; i++){
        newArr[i] = transform(newArr[i]);
    }
    return newArr;
}
function transform(i){
    return i * 2;
}
const result = arr(input, transform);
console.log(result); // [2, 4, 6, 8, 10]



// Filter Function
// Print all the even values
const inputs = [1, 2, 3, 4, 5, 6];
function isEven(num){
    let even = num % 2 == 0;
    return even;
}
const answers = inputs.filter(isEven);
console.log(answers);
