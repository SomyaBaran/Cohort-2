// PROBLEM - 01 ---> Print a Number in TS
let x: number = 1;
console.log(x);

// PROBLEM - 02 ---> Greet the input user
function greet(firstName: string) {
  console.log("hello " + firstName);
}

greet("somya");

// PROBLEM - 03 ---> Print the Sum of input a and b
function sum(a: number, b: number): number {
  // this ": number" at the end --> is the type of output
  return a + b;
}
const value = sum(1, 2);
console.log(value);

// PROBLEM - 04 ---> Print if the user is legal to vote or not (by age)

function isLegal(age: number) {
  if (age < 18) {
    console.log("user is minor");
  } else {
    console.log("user is legal");
  }
}
isLegal(12);
