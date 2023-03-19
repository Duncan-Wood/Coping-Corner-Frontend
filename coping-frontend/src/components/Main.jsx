import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Main(){

    const [resources, setResources] = useState([])

    useEffect(() => {
        const getResources = async () => {
            const response = await axios.get(`http://localhost:3001/api/resource/`)
            setResources((response.data));
                
        }
        getResources();
        console.log(resources)
    }, [])


    return(
        <div>
            <h1>hi</h1>
        </div>
    )
}