enum Directions {
    Up,
    Down,
    Left, 
    Right 
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