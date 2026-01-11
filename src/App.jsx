import './App.css'
import { useEffect, useState } from 'react'
import Child from "./components/Child.jsx"

function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("Use Effect Executed");

    return ()=>{
      console.log("cleanup Executed");
    };
  },[]);
  
  console.log("App Rendered");
  
  return (
    
    <div>
      <h1>Lifting State Up</h1>
      <h1>Parent Count : {count}</h1>
      <Child count = {count} setCount = {setCount}/>
    </div>
  );
}

export default App
