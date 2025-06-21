//https://jsonplaceholder.typicode.com/todos?_limit=4

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
    return <div>
        <Todos />
    </div>
}

function Todos() {
    const [todos, setTodos] = useState([]);
    const [index, setIndex] = useState(null);
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
        .then((response) => {
            console.log(response.data);
            setTodos(response.data);
        });
    }, []);
    return (
        <div>
            <button onClick={() => setIndex(0)}>1</button>
            <button onClick={() => setIndex(1)}>2</button>
            <button onClick={() => setIndex(2)}>3</button>
            <button onClick={() => setIndex(3)}>4</button>

            {index !== null && todos[index] && (
        <div>
          <p>{todos[index].title}</p>
          {/* <p>{todos[index].completed}</p> */}
          <p>{todos[index].completed ? "Yes" : "No"}</p>
        </div>
      )}
        </div>
    );

}

export default App;





