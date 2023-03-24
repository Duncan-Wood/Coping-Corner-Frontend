import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckSession } from "../Services/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ResourceDetailPage() {
  const [user, setUser] = useState(null);
  const [resource, setResource] = useState(null);
  const [added, setAdded] = useState(false);
  
  let { id } = useParams();
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await CheckSession();
        setUser(user);
      } catch (error) {}
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const selectedResource = async () => {
      const res = await axios.get(`http://localhost:3001/api/resource/${id}`);
      setResource(res.data);
    };
    selectedResource();
  }, [id]);

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        let payload = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
        const res = await axios.get(
          `http://localhost:3001/api/favorite/${user.id}/${id}`,
          payload
        );
        setAdded(Boolean(res.data));
      } catch (error) {
      }
    };

    if (user) {
      checkIfFavorite();
    }
  }, [id, user]);

  const addToToolkit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3001/api/favorite/add/${user.id}/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAdded(true);
    } catch (error) {}
  };

  const removeFromToolkit = async () => {
    try {
      let payload = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.delete(
        `http://localhost:3001/api/favorite/${user.id}/${id}`,
        payload,
        {}
      );
      setAdded(false);
    } catch (error) {
    }
  };

  const likeResource = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3001/api/resource/like/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setResource((prevResource) => ({
        ...prevResource,
        likes: prevResource.likes + 1,
      }));
    } catch (error) {
    }
  };

  const deleteResource = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/api/resource/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      await goBack();
    } catch (error) {
    }
    alert("resource deleted");
  };
  
  const showDelete = () => {

    if (user.id === resource.User.id || user.username === 'ccadmin'){
      return <button onClick={deleteResource}>Delete Resource</button>
    }
  };

  return (
    <div>
      <button id="go-back" onClick={goBack}>
        Go Back
      </button>
      {resource ? (
        <div className="detail-grid">
          <div className="content">
            <h1>{resource.title.toUpperCase()}</h1>
            <span className="category-for-card">TYPE</span>
            <h4>{resource.type.join(", ")}</h4>
            <span className="category-for-card">
              FOR WHEN YOU'RE FEELING...
            </span>
            <h4> {resource.feeling.join(" ")}</h4>
            <h5>by {resource.User.username}</h5>
            <h2 className="content">{resource.content}</h2>
            <span className="category-for-card">TIME REQUIREMENT</span>
            <h3 className="time">{resource.time_requirement} minutes</h3>
            <span className="like-btn" onClick={likeResource}>
              ADD ♥
            </span>
            <h3>loved {resource.likes} times</h3>

            <div className="detail-buttons">
              {added ? (
                <button
                  className="removefromtoolkit"
                  onClick={removeFromToolkit}
                >
                  REMOVE FROM MY TOOLKIT
                </button>
              ) : (
                <button className="addtotoolkit" onClick={addToToolkit}>
                  ADD TO MY TOOLKIT
                </button>
              )}
              <Link to={resource.optional_link} target="_blank">
                <button>Learn More</button>
              </Link>
              {user ? showDelete() : null}
            </div>
          </div>
          <div className="imageForDetail">
            <img src={resource.optional_image} alt="resource" />
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
