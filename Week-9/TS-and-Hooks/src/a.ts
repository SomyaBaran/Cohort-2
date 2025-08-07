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

// Problem - 05 ---> Passing a function as an argumant inside a function 


function runAfter1S(fn: () => void){
    setTimeout(fn ,1000);
}
runAfter1S(function(){
    console.log("hi there");
})

// Problem - 06 ---> Arrays in Typescript

type Users = {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUser(users: Users[]){
  users.forEach(user => {
    if (user.age >= 18) {
      console.log(`${user.firstName} is eligible to vote`);
    } else {
      console.log(`${user.firstName} is not eligible to vote`);
    }
  });
}

filterUser([{
    firstName: "somya",
    lastName: "baranwal",
    age: 19
},
{
    firstName: "Rishi",
    lastName: "Kant",
    age: 17
}]);
  






