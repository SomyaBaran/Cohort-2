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


*NOTE*  : --
1. Interfaces can be implemented by classes (**Types cant be!**) — that's one of the key differences between `interface` and `type`. 
                                         {***Popular interview question***}
