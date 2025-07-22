import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);
  const increment = ()=>{
    if(counter<20)
      setCounter(counter+1)
    else
      alert("Value cannot be greater than 20")
  }
  const decrement = () =>{
    if(counter>0)
      setCounter(counter-1)
    else
      alert("Value cannot be less than 0")
  }


  return (
    <>
        <h1>React Counter Project</h1>
        <h1 className="countField">{counter}</h1>
        <button onClick={increment}>Increse Value</button>
        <button onClick={decrement}>Decrease Value</button>
        <p>Note: Counter can traverse between 0 and 20</p>
    </>
  )
}

export default App
