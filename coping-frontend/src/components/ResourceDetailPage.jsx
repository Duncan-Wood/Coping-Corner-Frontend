import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { UserProvider } from "../UserProvider";
import { useNavigate } from "react-router-dom";

export default function ResourceDetailPage(){
    
    const [resource, setResource] = useState(null)
    let {id} = useParams()
    let navigate= useNavigate();
    const {user} = useContext(UserProvider);
    useEffect(() => {
        let selectedResource = async () => {
            const res = await axios.get('http://localhost:3001/api/resource/'+(id))
            setResource(res.data)
            console.log(res)
            console.log(res.data.title)
        }
        selectedResource()
        console.log(resource)
    },[id])

    const addToKit = (id) => {
        navigate (`/favorite/${user.id}/${id}/`)
    }
    return(

        <div className = "detail-grid">
            {resource ? (
        <div>
        <div className ="content">         
                 <h1>{resource.title.toUpperCase()}</h1>
                 <h4>{resource.type.join(', ')}</h4>
                 <h5>for when you're feeling:</h5><h5> {resource.feeling.join(' ')}</h5>
                 <h5>by {resource.User.username}</h5>
                <h2 className="content">{resource.content}</h2>
                <h3 className = "time">{resource.time_requirement} minutes</h3>
        </div>
            <div className = "imageForDetail">
                <img src={resource.optional_image}/>
            </div>
            <button>ADD TO MY TOOLKIT</button>

     
         </div>
         ) : ( <p>loading</p>)      }
         </div>
            
    )
}