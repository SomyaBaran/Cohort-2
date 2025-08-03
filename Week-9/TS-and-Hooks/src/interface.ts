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
