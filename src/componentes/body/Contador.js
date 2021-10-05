import React, {useState}  from  "react"


const Contador =({stock})=>{

 const[contador,setContador]=useState(0)

    const incrementar=()=>{
       if(contador < stock) setContador(contador+1)
    }

    const descontar=()=>{
       if(contador >0) setContador(contador-1)
       
        
    }

    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={incrementar}>Mas</button>
            <button onClick={descontar}>Menos</button>
        </div>


    )


}

export default Contador;