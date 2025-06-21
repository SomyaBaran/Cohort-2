// PROBLEM STATEMENT 

// Write a component that takes a toodo id as an input and fetches for that todo from the given endpoint and then renders it. 

// How would the dependecy array change??
// https://sum-server.100xdevs.com/todo?id=1


import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
    return <div>
        <Todo id={3} />
    </div>
}

function Todo({ id }) {
    const [todo, setTodo] = useState({});

    //Implement useEffect here
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos?id=" + id)
            .then(response => {
                setTodo(response.data[0]);

            }, [id])

        return (
            <h1>
                <div>
                    {todo.title}
                </div>
                <div>
                    {todo.description}
                </div>
            </h1>
        )
    })
}
export default App;


