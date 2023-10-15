import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5;
  
  const addValue = ()=>{
    // counter++;
    if(counter+1 <= 20){
      setCounter(++counter);
    }
    console.log("Value is added: "+counter);
  }
  
  const removeValue = ()=>{
    // counter--;
    if(counter-1 >= 0){
      setCounter(--counter);
    }
    console.log("Value is decreased: "+counter);
  }
  
  return (
    <>
      <h1>Code n Code</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
