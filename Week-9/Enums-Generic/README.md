// `ENUMS` --> Enumerations 

1. Enums allow us to define a set of named constants.
2. They help group related values (like directions, colors, roles, etc.) in a clean and readable way.


/// ***Why use Enums?  --> Can’t we just use Types?***

-> Yes, we can use `type` too for things like `"Up" | "Down"` — but here's why `enum` is better in some cases:
1. **Autocomplete + Suggestions**  
   Enums show up like objects → `Direction.Up`, `Direction.Down` → no need to remember exact string spelling.
2. **Readable Named Options**  
   `Direction.Left` looks cleaner and more meaningful than just `"Left"`.
3. **Works great with logic**  
   Enums are perfect for `if`, `else`, or `switch` statements — easy to read and compare.
4. **Exists in final JS code**  
   When you compile `.ts` to `.js`, enums remain in the code as real objects.  
   But `type` gets erased → it only exists during development.

/// ***Comparison*** /// ***Types vs Enums*** ///

// type Direction = "Up" | "Down" | "Left" | "Right";
// enum Direction { Up, Down, Left, Right }

