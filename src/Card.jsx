import Button from "./Button";
import "./Card.scss"
import { useEffect, useState } from "react"


function Card(){
    const [objData, setObjData] = useState([])
    const [callBtn, setCallBtn] = useState(0)


    useEffect(()=>{
        async function getData(){
            let response = await fetch ("https://random-data-api.com/api/v2/users")
            let data = await response.json()
            setObjData(data)    
        }    
        getData()
    }, [callBtn])

    
    const updateUser = () =>{
        setCallBtn(callBtn + 1)
    }


    return(
        <>
        <div className="card">

            <img src={objData?.avatar} alt="" />
            <h2>Full name: <i>{objData?.first_name + " " + objData?.last_name}</i></h2>
            <h2>Username: <i>{objData?.username}</i></h2>
            <h2>Occupation: <i>{objData?.employment?.title}</i></h2>
            <Button name="Click" updateUserFn={updateUser}/>
        </div>
        </>
    )
}

export default Card