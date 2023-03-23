import React, { useState, useEffect, useContext } from "react";
import { GetResources } from "../Services/ResourceServices";
import { CheckSession } from "../Services/Auth";
import { UserProvider } from "../UserProvider";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const { resources } = useContext(UserProvider);

  // const [showEditProfile, setShowEditProfile] = useState(false)

  let navigate = useNavigate();

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
        console.log(user)
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      console.log(user);
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

  //   const handleEditProfile = () => {
  //     window.location.href = '/EditProfile'
  //   }

  if (loading) {
    return <p> Loading... </p>;
  }

  if (error) {
    return <p> Error: {error.message} </p>;
  }

  const sortResources = resources.sort((a, b) => new Date(b.date) - new Date(a.date));

  const mostRecentResource = sortResources.slice(0, 5);

  return (
    <div className="profile-page">
          <div>
        <button id="go-back" onClick={goBack}>
        Go Back
      </button></div>
      <div className="header">
        <h2 className="welcome-back"> Welcome back, {user.username}! </h2>
        {/* <button onClick={ handleEditProfile }> Edit Profile </button> */}
      </div>
      <div className = "profile-grid">
        
          <div className = "card-container">
            <h3 className="profile-titles">Recent Resources</h3>
            {mostRecentResource.map(resource => (
            <div
              className="resource-card-profile"
              key={resource.id}
              onClick={() => showResource(resource.id)}
            >
              <h1> { resource.title } </h1>
              <h5 className = "resource-type"><span className = "category-for-card">TYPE</span>{ resource.type.join(", ") } </h5>
              <h5 className = "resource-feeling"> <span className = "category-for-card">FOR WHEN YOU'RE FEELING</span>{ resource.feeling.join(", ") } </h5>
              <h2 className = "preview-text"> { resource.preview_text } </h2> 
              <div className = "container-for-image">
                <img className= "small-img-card" src = {resource.optional_image}/>
              </div>
              <h5> <span className = "category-for-card">TIME REQUIREMENT</span>{ resource.time_requirement} minutes </h5>
            </div>
            ))}
            </div>

            <div className = "card-container">
            <h3 className="profile-titles">Your Toolkit</h3>
            <div className = "resource-card-profile">
            {userFavorites ? (
        userFavorites.map((favorite) => {
          return (
            <div key={favorite.id}>
              <h2> {favorite.Resource.title} </h2>
              <p> {favorite.Resource.preview_text} </p>
              <p> Time Requirement: {favorite.Resource.time_requirement} </p>
            </div>
            );
            })
            ) : (
            <p>Loading...</p>
            )}
            </div>
            <div className= "resource-card-profile">
              <h3>this is card number 2</h3>
            </div>
            </div>

            {/* <div className = "card-container">
            <h3 className="profile-titles">Your Comments</h3>
            <div className = "resource-card-profile">
              <h3>Nothing to see here yet!</h3>
              <h4>This is where the comments *might* go</h4>
            </div>
            </div> */}
          
      </div>
    </div>
  );
}

export default Profile;
