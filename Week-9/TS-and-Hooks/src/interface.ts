///////////////// INTERFACES  /////////////////
interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // (Optional) --> means user can pass it -> else they can leave filling email too
}

function isLegal(user: User){
  if(user.age > 18){
    return true;
  }
  else{
    return false;
  }
}

function greet(user: User){
    console.log("Good morning" + user.firstName);
}
isLegal({
  firstName: "somya",
  lastName: "baranwal",
  age: 18
//   email: "askahsdbg"  --> user can pass email here or leave it --> There wont be any squiggly lines, since email is an option 
})


//// Implementing Interface 
// We can add a class in Interface too ---> HOW? see below  


interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person{
    name: string;
    age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string){
        console.log(` ${phrase} ${this.name}`);
    }
}

const e = new Employee("Somya", 18);
console.log(e.name);
