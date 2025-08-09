enum Directions {
    Up,
    Down,
    Left, 
    Right 
}

function doSomething(keyPressed: Directions) {
    if (keyPressed == Directions.Up) {
        console.log("Player jumps");
    }
    if (keyPressed == Directions.Down) {
        console.log("Player kneels down");
    }
    if (keyPressed == Directions.Left) {
        console.log("Player moves left");
    }
    if (keyPressed == Directions.Right) {
        console.log("Player moves right");
    }
}
doSomething(Directions.Up); // 0
doSomething(Directions.Down); // 1
doSomething(Directions.Left);  // 2
doSomething(Directions.Right);  // 3




////// JUST FOR UNDERSTANDING //////
// Nothing to do with Typescript as this is Enums.js file (.ts file that gets eventually converted to .js)

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up"; // Up that is on 0th place is assigned "up"
    Directions[Directions["Down"] = 1] = "Down"; // Down that is on 1th place is assigned "down"
    Directions[Directions["Left"] = 2] = "Left"; // Left that is on 2th place is assigned "left"
    Directions[Directions["Right"] = 3] = "Right"; // Right that is on 3th place is assigned "right"
})(Directions || (Directions = {}));


// As you can see --> there is no as such thing called Enums (enumerations)
var Direction;
(function (Direction) {
    // This is how .ts is eventually converting to ...
    // Instead of assigning with 0, 1, 2, 3 and so on --> Directions value are assigned manually like "up" "down" and so on
    Direction["Up"] = "up";   // instead of 0 --> up
    Direction["Down"] = "down"; // instead of 1 --> down
    Direction["Left"] = "left"; // instead of 2 --> left
    Direction["Right"] = "right"; // instead of 3 --> right

    // If you get to access these values of enums --> you have to use their manual indexing
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Directions.Up) {
        console.log("Player jumps");
    }
    if (keyPressed == Directions.Down) {
        console.log("Player kneels down");
    }
    if (keyPressed == Directions.Left) {
        console.log("Player moves left");
    }
    if (keyPressed == Directions.Right) {
        console.log("Player moves right");
    }
}
doSomething(Directions.Up); 
doSomething(Directions.Down); 
doSomething(Directions.Left); 
doSomething(Directions.Right); 

