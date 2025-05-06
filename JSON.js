// Convert JSON string (e.g., from an API or server) into a JavaScript object
const userJson = '{"name": "Somya", "age": 17, "gender": "male"}';
const user = JSON.parse(userJson);
console.log("Gender:", user["gender"]);  // Output: Gender: male

// Convert a JavaScript object into a JSON string
const names = { name1: "Somya", name2: "Rishi", name3: "Ayush" };
const namesJson = JSON.stringify(names);
console.log("JSON String:", namesJson);  // Output: JSON String: {"name1":"Somya","name2":"Rishi","name3":"Ayush"}
