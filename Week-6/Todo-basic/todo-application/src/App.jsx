import React from 'react'
import { useState } from 'react'
import "./App.css";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function addTodo() {
    if (newTitle.trim === "") {
      return;
    }
    setTodos([...todos, {
      id: counter++,
      title: newTitle || "No Title",
      description: newDescription || "No Description"
    }])
    setNewTitle(""); // this clears the title input
    setNewDescription(""); // this clears the description input 
  }

  return (
    <div className="container">
      <div className="box">
        <input
          placeholder="Enter Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          placeholder="Enter Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add a todo</button>
        {todos.map((todo) =>
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        )}
      </div>
    </div>
  );
}

function Todo({ title, description }) {
  return (

    <div className="todo-item">
      <h2>{title}</h2>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
