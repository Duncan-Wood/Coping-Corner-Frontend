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
      {userFavorites ? (
        userFavorites.map((favorite) => (
          <div key={favorite.Resource.id}>
            <h2> {favorite.Resource.title} </h2>
            <p> {favorite.Resource.preview_text} </p>
            <p> Time Requirement: {favorite.Resource.time_requirement} </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
