// JSON parse --> Converts a JSON string (from APIs or server) into a JavaScript object.
const users = '{"name": "somya", "age": 17, "gender": "male"}'
const user = JSON.parse(users);
console.log(user["gender"]);


const names = {name1 : "somya", name2 : "rishi", name3 : "ayush"}
const Nms = JSON.stringify(names);
console.log(Nms);