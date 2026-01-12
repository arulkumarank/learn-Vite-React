import './App.css'
import {useRef, useEffect, useState } from 'react'
import Child from "./components/Child.jsx"

function App() {

  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current+=1;
  console.log("App Rendered", renderCount.current);

  useEffect(()=>{
    console.log("Use Effect Executed");

    return ()=>{
      console.log("cleanup Executed");
    };
  },[]);

  
  return (
    
    <div>
      <h1>UseRef Demo</h1>

      <input style={{padding:'8px'}} ref= {inputRef} placeholder='Type something'/>
      <button onClick={()=>inputRef.current.focus()}>Focus input</button>


      <h1>State Count : {count}</h1>
      <Child count = {count} setCount = {setCount}/>
    </div>
  );
}

export default App
