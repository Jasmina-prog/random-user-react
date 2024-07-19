import "./Card.scss"
import { useEffect, useState } from "react"


function Card(){
    const [objData, setObjData] = useState([])
    useEffect(()=>{
        async function getData(){
            let response = await fetch ("https://random-data-api.com/api/v2/users")
            let data = await response.json()
            setObjData(data)
            console.log(objData);
           
        }
    
        getData()
    }, [])


    return(
        <>
        
        <div className="card">
            <div className="ava"></div>
            <h1></h1>
            <h2></h2>
            <h2></h2>
            <button></button>
        </div>
        </>
    )
}

export default Card