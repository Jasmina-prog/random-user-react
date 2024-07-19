import "./Card.scss"
import { useEffect, useState } from "react"


function Card(){
    const [objData, setObjData] = useState([])
    console.log(objData);

    useEffect(()=>{
        async function getData(){
            let response = await fetch ("https://random-data-api.com/api/v2/users")
            let data = await response.json()
            setObjData(data)
           
        }
    
        getData()
    }, [])


    return(
        <>
        {
            console.log(objData.id)
        }
        
        <div className="card">
            <div className="ava"></div>
            {/* <img src=` {objData?.avatar} ` alt="" /> */}
            <h2>Full name: <i>{objData?.first_name + " " + objData?.last_name}</i></h2>
            <h2>Username: <i>{objData?.username}</i></h2>
            <h2>Occupation: <i>{objData?.employment?.title}</i></h2>
            {/* <button></button> */}
        </div>
        </>
    )
}

export default Card