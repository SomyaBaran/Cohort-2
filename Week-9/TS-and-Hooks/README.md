let x: number = 1;
console.log(x);

// --> This is how we write code in JS --> But in TS, we can’t just pass any argument type.

// **WHY USE TYPES?**
// We add types (like string, number) so:
// - Developers can easily understand what kind of input a function expects.
// - It reduces bugs when the codebase gets bigger.


/// Lets understand about some important things in tsconfig.json file : --

1. `Target` ---> It tells the TypeScript compiler what version of JavaScript to compile your TypeScript into.
2. `RootDir` ---> where all your TS files are organised 
3. `OutDir` ---> where all your JS files are organised 
4. `NoImplicitAny` ---> It makes your code slightly less strict (like you dont have to give the type of name as string or age as number)
5. `removeComments` ---> When you are running TS codebase with comments in it ... The js file wont show comments if removeComment is set true


//// ***INTERFACES*** ////

// The use of interface is helpful when defining functions with structured input.
// For example: in functions like isLegal() or greet(), we might have to repeat the same object type again and again.
// To avoid this repetition, we can use an interface.
// An interface allows us to define a type (or schema) separately and reuse it wherever needed.
// This reduces code duplication and makes the code cleaner and more maintainable.


//// ***TYPES*** ////

// Type is similar to Interface --> It let's you define the schema of data.
// You can reuse the same type multiple times instead of rewriting the structure again and again. --> Just like interface 
// Type allows unions and intersections --> Either this or that **type Status = "success" | "error" | "loading";**



*NOTE*  : --
1. Interfaces can be implemented by classes (**Types cant be!**) — that's one of the key differences between `interface` and `type`. 
                                         {***Popular interview question***}
2. While writing code --> The difference between type and interface is --> we use "=" in types but not interface
3. Type and Interface are mostly same .. nothing much different 
4. `type` is more flexible than `interface`. It allows unions (`|`) and intersections (`&`).





//// ***Generics*** //////



// PROBLEM STATEMENT 

// Let's say you have a fucntion that needs to return the first item in the array (array can be either of string or number)

type Input = string | number;
function firstEl(arr: Input[]){
    return arr[0];
}

// const value = firstEl(["somya", "rishi"]);
// console.log(value.toUpperCase());
const value = firstEl(["somya", "rishi"]); 

if (typeof value !== "string") {
    console.log(value);
}

console.log(value);

const num = 1;

if (typeof num !== "number") {
    console.log(num);
}


// This was a good code --> then why introducing generics?
// Let's understand what's wrong with this code 

// the thing getting stored in value is somya (since we are taking the 0th index value)
// But when you try to apply some functions (can be pre-existing functions) --> its gonna show error 

// why?
// because TS can't identify on its own that value is gonna be string or a number 
// it will work fine with string 
// but not numbers (you can't do --> 1.toUpperCase) -> WRONG 

// Also we can pass numbers and strings in an array combine 
// then it will throw error



