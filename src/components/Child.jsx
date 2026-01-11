function Child({count, setCount}){
    console.log("Child Rendered");

    return(
        <div style={{border: "1px solid grey",padding: "10px"}}>
        <h3>Child Component</h3>
        <button onClick={()=> count = setCount(count+1)}>+</button>
        </div>
    )
}

export default Child