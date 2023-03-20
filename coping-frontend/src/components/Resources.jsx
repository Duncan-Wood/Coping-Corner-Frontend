import { useState, useEffect, useContext } from "react";
import { GetResources } from '../Services/ResourceServices'
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../UserProvider";

export default function Resources () {
    const { user } = useContext(UserProvider);
    const { authenticated } = useContext(UserProvider)
    const [resources, setResources] = useState([])
    let navigate = useNavigate()

    let arrayTypes = [ "type_meditation", "type_movement", "type_distraction", "type_grounding", "type_affirmation"]
    

    useEffect(()=>{
        const handleResources = async () => {
            const results = await GetResources()
            setResources (results)
            console.log(resources)
        }
        handleResources()
     
    },[])
    // for (let i = 0; i < resources.length; i++){
    // for (let t = 0; t <arrayTypes.length; t++){
    //     if (resources[i].arrayTypes[t] == true){
    //         resources[i].list_types.push(resources[i])
    //     }
    // }}
    return(user && authenticated) ? (
        <div className = "user_feed">
            {resources.map ((resource)=> (
                <div className = "resource-card" key = {resource.id}>
                    <h3>{resource.title}</h3>
                    <h5>by: {resource.User.username}</h5>
                    arrayTypes.map((type) => (
                       { for (let i = 0; i < arrayTypes.length; i++)
                          if(resources.arrayTypes[i]){
                            <h6>resource.arrayTypes[i]</h6>
                          }))
                    {{
                           
                                
                            }
                     } }
                   

                    {/* <h4>{resource.list_types}</h4> */}
                    

                </div>
            ))}
        </div>
    ) :
        <div>
            <h3>Resources</h3>
        </div>
    
}