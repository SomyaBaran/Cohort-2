import React from 'react'
import { useState } from 'react'
import "./App.css";

let counter = 1;

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

  function handleCheckboxClick(id) { 
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos); 
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
            id={todo.id} 
            title={todo.title}
            description={todo.description}
            onCheck={handleCheckboxClick} 
          />
        )}
      </div>
    </div>
  );
}

function Todo({ id, title, description, onCheck }) {
  return (
    <div className="todo-item">
      <div className="todo-header">
        <input type="checkbox" 
        onChange={() => onCheck(id)} 
        className="todo-checkbox" />
        <div>
          <h2 className="todo-title">{title}</h2>
          <h3 className="todo-description">{description}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
