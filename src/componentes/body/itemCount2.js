import React, { useState } from "react";

const Contador2=()=>{

    const [contador,setContador]=useState(0)
const click=(texto)=>{
    alert(texto)
}

    return(

        <button onClick={()=>click("asd")}>asd</button>
    )


}

export default Contador2