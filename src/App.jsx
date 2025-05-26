// NOTE: useState also tells React to re-render the component when the state changes.

import './App.css'
import {useState} from "react"; //it lets your component remember data across renders.

function App() { //This defines a React component named App.
    const [count, setCount] = useState(0); 
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){

    function onClickHandler(){
      props.setCount(props.count + 1);
    }
    return <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
}
export default App;
