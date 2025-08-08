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
