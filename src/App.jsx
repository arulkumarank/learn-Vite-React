import './App.css'
import { useState } from 'react'
import Child from "./components/Child.jsx"

function App() {

  const [count, setCount] = useState(0);

  console.log("ParentApp rendered")
  return (
    
    <div>
      <h1>Hello, World!</h1>
      <p>count = {count}</p>
      <button onClick={()=> setCount(count+1)}>+</button>
      <Child count = {count}/>
    </div>
  )
}

export default App
