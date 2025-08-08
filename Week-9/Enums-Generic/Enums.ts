// Example 1: Numeric enum (auto-assigned values: 0, 1, 2, 3)
enum Directions {
    Up,
    Down,
    Left, 
    Right 
}

// Example 2: String enum (manually assigned values)
// Note: If you assign one value manually, you must assign all

enum Direction {
    Up = "up",
    Down = "down",
    Left = "left", 
    Right = "right"
}

function doSomething(keyPressed: Directions){
    // do some code here
    if(keyPressed == Directions.Up){        // 0 --> Each value is automatically assigned like indexing
        // do something --> lets say among us player will jump
    }
    if(keyPressed == Directions.Down){      // 1
        // do something do something --> lets say among us player will Kneel down 
    }
    if(keyPressed == Directions.Left){      // 2
        // do something --> lets say among us player will move left
    }
    if(keyPressed == Directions.Right){     // 3
        // do something --> lets say among us player will move right
    }
}

doSomething(Directions.Right);
