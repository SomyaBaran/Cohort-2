// Arrays in TypeScript

// Given an array of positive integers as input, return the maximum value in the array 
function maxValue(arr: number[]){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

// Given the list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUsers(users: User[]){
    return users.filter(x => x.age >+ 18);
}

console.log(filterUsers([{
    firstName: "Somya",
    lastName: "Baranwal",
    age: 18
},{
    firstName: "Rishi",
    lastName: "Kant",
    age: 23
}]));



////  Filter users array 
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
