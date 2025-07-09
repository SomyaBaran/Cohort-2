import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(null);

    function handleInputChange(e) {
        setInput(Number(e.target.value));
    }
    function inbox() {
        let newCount = 0;
        for (let i = 0; i <= input; i++) {
            newCount = newCount + i;
        }
        setOutput(newCount);
    }
    function counter() {
        setCount(count + 1)
    }
    return (
        <div>
            <input
                placeholder="Enter a number"
                type="number"
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={inbox}>Click</button>
            <p>Sum {input} is {output}</p>
            <button onClick={counter}>Counter {count}</button>
        </div>
    )
}

export default App;
