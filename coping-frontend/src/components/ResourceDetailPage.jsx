import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function ResourceDetailPage(){
    
    const [resource, setResource] = useState(null)
    let {id} = useParams()

    useEffect(() => {
        let selectedResource = async () => {
            const res = await axios.get('http://localhost:3001/api/resource/'+(id))
            setResource(res.data)
            console.log(res.data)
        }
        selectedResource()

    },[id])

    return(
        <div><h1>
            "This is where the info bout the specific resource will go."
            </h1>
        </div>
    )
}