import React from 'react'
import { useState } from 'react'

let counter = 4; // not a state variable --> simple js variable

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Go to Gym", description: "At 6 PM" },
    { id: 2, title: "Study React", description: "Finish useState topic" },
    { id: 3, title: "Dinner", description: "Eat by 8 PM" }
  ]);

  function addTodo() {
    setTodos([...todos, { // SPREAD OPERATOR
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])


    // const newTodos = [];
    // for(let i = 0; i < todos.length; i++){
    //   newTodos.push(todos[i]);
    // }
    // // newTodos == todos
    // newTodos.push({
    //   id: 4,
    //   title: Math.random(),
    //   description: Math.random()
    // })
    // // existing ones + 1
    // setTodos(newTodos);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => 
        <Todo 
          key={todo.id} // important concept
          title={todo.title}
          description={todo.description}
          />)}
    </div>
  );
}
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
export default App
