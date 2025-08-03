let x: number = 1;
console.log(x);

// --> This is how we write code in JS --> But in TS, we can’t just pass any argument type.

// WHY USE TYPES?
// We add types (like string, number) so:
// - Developers can easily understand what kind of input a function expects.
// - It reduces bugs when the codebase gets bigger.


/// Lets understand about some important things in tsconfig.json file : --

1. Target ---> It tells the TypeScript compiler what version of JavaScript to compile your TypeScript into.
2. RootDir ---> where all your TS files are organised 
3. OutDir ---> where all your JS files are organised 
4. NoImplicitAny ---> It makes your code slightly less strict (like you dont have to give the type of name as string or age as number)
5. removeComments ---> When you are running TS codebase with comments in it ... The js file wont show comments if removeComments is set true
