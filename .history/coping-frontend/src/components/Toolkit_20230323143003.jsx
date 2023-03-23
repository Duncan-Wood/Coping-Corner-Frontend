import { useState, useEffect } from "react";
import { CheckSession } from "../Services/Auth";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Tookit() {
  const [loading, setLoading] = useState(true);
  const [resource, setResource] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);
  let { id } = useParams();

  let navigate = useNavigate()
  const goBack = () => {
      navigate(-1);
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
        console.log(res)
      } catch (error) {
        console.log(error)
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
      {/* {userFavorites ? (
        userFavorites.map((favorite) => { */}
          <div className = "profile-grid">
        
        <div className = "card-container">
          <h3 className="profile-titles">Recent Resources</h3>
          {userFavorites ? (
        userFavorites.map((favorite) => {
          <div
            className="resource-card-profile"
            key={favorite.id}
            onClick={() => showResource(resource.id)}
          >
            <h1> { favorite.Resource.title } </h1>
            <h5 className = "resource-type"><span className = "category-for-card">TYPE</span>{ favorite.Resource.type.join(", ") } </h5>
            <h5 className = "resource-feeling"> <span className = "category-for-card">FOR WHEN YOU'RE FEELING</span>{ favorite.Resource.feeling.join(", ") } </h5>
            <h2 className = "preview-text"> { favorite.Resource.preview_text } </h2> 
            <div className = "container-for-image">
              <img className= "small-img-card" src = {favorite.Resource.optional_image}/>
            </div>
            <h5> <span className = "category-for-card">TIME REQUIREMENT</span>{ favorite.Resource.time_requirement} minutes </h5>
          </div>
          ))}
          </div>
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
