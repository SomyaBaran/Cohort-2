// Pusing any number in an array --> add a thing in the last of the array
const initialArray = [1, 2, 3, 4, 5];
initialArray.push(2);
console.log(initialArray);

// Popping any number from an array --> it will only remove the last thing in the array
 const array = [1, 2, 3, 4, 5];
 array.pop();
 console.log(array);

 // Unshifting any number from the array --> adding a thing in the starting of the array
 const arry = [10, 20, 30, 40, 50];
 arry.unshift(0);
 console.log(arry)

 // Shifting any number from the array --> it will remove the first thing in the array
 const arr = [10, 20, 30, 40, 50];
 arr.shift();
 console.log(arr)

 // Concatinating two arrays 
 const initialArrays = [1, 2, 3];
 const finalArrays = [4, 5, 6];
console.log(initialArrays.concat(finalArrays));

// ForEach function 
const numbers = [1, 2, 3];
function logThing(str){
    console.log(str);
}
numbers.forEach(logThing);


