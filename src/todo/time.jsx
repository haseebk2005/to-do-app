import { useState } from "react"

export const Time=()=>{
    const[datetime , setdatetime] = useState("")
    const dt=()=>{
        let now = new Date()
        let date = now.toLocaleDateString()
        let time = now.toLocaleTimeString()
        setdatetime(`${date} - ${time}`)
    }
    setInterval(() => {
        dt()
    }, 1000);
    
    return(
        <>
        <h1>{datetime}</h1>
        </>
    )
}