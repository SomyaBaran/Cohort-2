// PROBLEM STATEMENT 

// Let's say you have a fucntion that needs to return the first item in the array (array can be either of string or number)


///// WRONG METHOD /////

// type Input = string | number;
// function firstEl(arr: Input[]){
//     return arr[0];
// }
// const value = firstEl(["somya", "rishi"]); 

// if (typeof value !== "string") {
//     console.log(value);
// }
// const num = 1;

// if (typeof num !== "number") {
//     console.log(num);
// }


//// CORRECT METHOD ////
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const el = getFirstElement(["somya", "rishikant"]);
const el2 = getFirstElement([1, 30]);
const el3 = getFirstElement([true, false]);
// console.log(el.toLowerCase()) 

// if you wanna add different types of values in an array //
const el4 = getFirstElement<string | number>(["somya", "rishikant", 16, 31]);
// We can also use interface 
interface User {
    name: string;
}
const el5 = getFirstElement<User>([
    {name: "somyabaranwal"}
])
console.log(el?.toUpperCase());
// el can be any type because we are using generics but we didn’t specify it’s string
// that's why we are using "?"
// Remember optional chaining (?) --> It basically asks “does this value exist?

// console.log(el2);
// console.log(el3);
// console.log(el4);
// console.log(el5);








