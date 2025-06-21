// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios';

// function App() {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//       .then(function (response) {
//         setTodos(response.data);
//       });
//   }, []);
//   return (
//     <>
//       {todos.map(todo => <Todo
//         title={todo.title}
//         description={todo.description} />)}
//     </>
//   )
// }

// function Todo({ title, description }) {
//   return <div>
//     <h1>{title}</h1>
//     {description}
//   </div>
// }

// export default App;
