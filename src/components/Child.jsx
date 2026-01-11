function Child({count}){
    console.log("Child Rendered");

    return(
        <div style={{border: "1px solid grey",padding: "10px"}}>
        <h3>Child Component</h3>
        <p>count from Parent Component : {count}</p>
        </div>
    )
}
export default Child