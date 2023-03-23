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
      <div className="header">
        <h2> Welcome back, {user.username}! </h2>
        {/* <button onClick={ handleEditProfile }> Edit Profile </button> */}
      </div>
      <div className = "profile-grid">
        
          <div className = "card-container">
            <h3 className="profile-titles">Recent Resources</h3>
            {recentResources.map(resource => (
            <div
              className="resource-card-profile"
              key={mostRecentResource.id}
              onClick={() => showResource(mostRecentResource.id)}
            >
              <h3> { mostRecentResource.title } </h3>
              <h5> { mostRecentResource.type.join(", ") } </h5>
              <h4> { mostRecentResource.preview_text } </h4> 
              <h5> Time Requirement: { mostRecentResource.time_requirement } </h5>
            </div>
            ))}
            </div>

            <div className = "card-container">
            <h3 className="profile-titles">Your Toolkit</h3>
            <div className = "resource-card-profile">
              <h3>Nothing to see here yet!</h3>
              <h4>This is where the toolkit should go. I'm going to add a second div in here just to show you the scroll function. we can include as many 'cards' as we want.</h4>
            </div>
            <div className= "resource-card-profile">
              <h3>this is card number 2</h3>
            </div>
            </div>

            <div className = "card-container">
            <h3 className="profile-titles">Your Comments</h3>
            <div className = "resource-card-profile">
              <h3>Nothing to see here yet!</h3>
              <h4>This is where the comments *might* go</h4>
            </div>
            </div>
          
      </div>
    </div>
  );
}

export default Profile;
