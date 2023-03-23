import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CheckSession } from "../Services/Auth";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ResourceDetailPage() {
    const [user, setUser] = useState(null);
    const [resource, setResource] = useState(null);
    const [added, setAdded] = useState(false);
    let {id} = useParams();
    
    let navigate = useNavigate()
  
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await CheckSession();
                setUser(user);
                // console.log(user)
                // console.log(user.id)
            } catch (error) {
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const selectedResource = async () => {
            const res = await axios.get('http://localhost:3001/api/resource/' + id);
            setResource(res.data);
            // console.log(res);
            // console.log(res.data.title);
        }
        selectedResource();
        console.log(resource);
    }, [id]);

    const addToToolkit = async () => {
        try {
            const res = await axios.post(`http://localhost:3001/api/favorite/add/${user.id}/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(res);
            setAdded(true);
        } catch (error) {
        }
    }

    const removeFromToolkit = async () => {
        try {
            const res = await axios.delete(`http://localhost:3001/api/favorite/${user.id}/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(res);
            setAdded(false);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            {resource ? (
                  <div className = "detail-grid">


                    <div className ="content">
                        <h1>{resource.title.toUpperCase()}</h1>
                 <h4>{resource.type.join(', ')}</h4>
                 <h5>for when you're feeling:</h5><h5> {resource.feeling.join(' ')}</h5>
                 <h5>by {resource.User.username}</h5>
                <h2 className="content">{resource.content}</h2>
                <h3 className = "time">{resource.time_requirement} minutes</h3>
                    
                    {added ? (
                        <button onClick={removeFromToolkit}>REMOVE FROM MY TOOLKIT</button>
                    ) : (
                        <button onClick={addToToolkit}>ADD TO MY TOOLKIT</button>
                    )}

                        <button>EDIT RESOURCE</button>
                    </div>
                    
            <div className = "imageForDetail">
                <img src={resource.optional_image}/>
            </div>

                </div>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}