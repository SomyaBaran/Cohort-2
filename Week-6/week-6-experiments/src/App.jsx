import React from "react";
import { Fragment } from "react";
import { useState } from "react";

//One way to re-render only a specific part of the UI is to push the state down to the specific component that needs to change.



// function App() {

//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="Somya2"></Header>
//       <Header title="Somya3"></Header>
//       <Header title="Somya2"></Header>
//       <Header title="Somya3"></Header>
//       <Header title="Somya2"></Header>
//       <Header title="Somya3"></Header>
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("my name is Somya");
//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>update the title</button>
//       <Header title={title}></Header>
//     </div>

//   )
// }
// function Header({ title }) {
//   return <div>
//     {title}
//   </div>
// }



// Another way is --> use React.memo 



function App() {


  const [title, setTitle] = useState("my name is somya");
  
  function updateTitle(){
    setTitle("my name is " + Math.random());
  }
  return (
    <div>
    <button onClick={updateTitle}>Update the Title</button>
      <Header title={title}></Header>
      <Header title="Somya2"></Header>
      <Header title="Somya3"></Header>
      <Header title="Somya2"></Header>
      <Header title="Somya3"></Header>
      <Header title="Somya2"></Header>
      <Header title="Somya3"></Header>
      
    </div>
  )
}

const Header = React.memo(function Header({ title }) {
  return <div>
    {title}
  </div>
})


export default App;
