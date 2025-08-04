type Users = {
  firstName: string;
  secondName: string;
  age: number;
};

function isLegal(user: Users) {
  if (user.age > 18) {
    console.log("user can legally vote");
  } else {
    console.log("user is not eligible to vote");
  }
}

isLegal({
  firstName: "somya",
  secondName: "baranwal",
  age: 19,
});

//// UNION ////
type Greet = {
  name: string;
  age: string | number;
};

function Greeting(user: Greet) {
  console.log("Hello " + user.name + "Age " + user.age);
}
Greeting({
  name: "somya",
  age: "18",
});

//// INTERSECTION ////
type Employee = {
  name: string;
  startDate: Date;
};
interface Manager {
    name: string;
    department: string;
}
type TechTeam = Employee & Manager;
// type TechTeam = {
//     name: string;
//     department: string;
//     startDate: new Date;
// }
