// function to get the length of the given string

function getLength(str){
    console.log("original string: ", str);
    console.log("length: ", str.length);
}
getLength("Hello World");

// find index of given target 
 function findIndexOf(str, target){
    console.log("original string: ", str);
    console.log("index: ", str.indexOf(target));
 }
 findIndexOf("hello world", "world");

 // slicing any string  
 let names = "somyabaran";
 let slice = names.slice(0, 5);
 console.log(slice)

 // using substr
 let firstName = "Rishikant";
 let ans = firstName.substr(2, 5);
 console.log(ans)


 // Replacing some part of strings 
 let work = "engineering";
 console.log(work.replace("ing", "s"))

 //convering a string into an array  --> " " on what basis you wnat to split on 
 let hobby = "my hobby is to play games and write stories";
 let answer = hobby.split(" ");
 console.log(answer)

 //trimming extra white space ---> it does not trim the white space in between the strings ---> only starting and ending white spaces 
 let values = "      hello my name is    somya      ";
 console.log(values.trim());


 // toUpperCase
 let upper = "somya baranwal";
 console.log(upper.toUpperCase());

 //toLowerCase
 let lower = "SOMYA BARANWAL";
 console.log(lower.toLowerCase());
