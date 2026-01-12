import { useContext } from "react";
import UserContext from "../context/UserContext";

function Child({count, setCount}){
    console.log("Child Rendered");
    const user = useContext(UserContext);

    return(
        <div style={{border: "1px solid grey",padding: "10px"}}>
        <h3>Child Component</h3>
        <p>user from context : {user}</p>
        <button onClick={()=> count = setCount(count+1)}>+</button>
        </div>
    )
}

export default Child