import { useState, useEffect } from "react";
import { CheckSession } from "../Services/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Tookit() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);
  
  let navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  };

  const showResource = (index) => {
    navigate(`/resources/detail/${index}`);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await CheckSession();
        setUser(user);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {

        let payload = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }

        const res = await axios.get(
          `http://localhost:3001/api/favorite/${user.id}`,
          payload
        )
        setUserFavorites(res.data)
      } catch (error) {
      }
    }
    fetchFavorites()
  }, [user])

  return (
    <div>
      <button id="go-back" onClick={goBack}>
        Go Back
      </button>
      <h1> Your Toolkit </h1>
      <div className="toolkit_main">
        {userFavorites ? (
          userFavorites.map((favorite) => {
            return (
              <div className="resource-card" key={favorite.id} onClick={() => showResource(favorite.Resource.id)}>
                <h1 className="loggedTitle">{favorite.Resource.title} </h1>
                <span className="category-for-card">TYPE</span> <h5 className="resource-type">{favorite.Resource.type.join(", ")} </h5>
                <span className="category-for-card">FOR WHEN YOU'RE FEELING</span><h5 className="resource-feeling">{favorite.Resource.feeling.join(", ")} </h5>
                <h2 className="preview-text"> {favorite.Resource.preview_text} </h2>
                <div className="container-for-image">
                  <img className="small-img-card" src={favorite.Resource.optional_image} alt='resource' />
                </div>
                <h5> <span className="category-for-card">TIME REQUIREMENT</span>{favorite.Resource.time_requirement} minutes </h5>
                <div className="likes-container">
                  <h5>{favorite.Resource.likes} people love this!</h5>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}




                 
                  
                  
         
                  
                
                 
          
