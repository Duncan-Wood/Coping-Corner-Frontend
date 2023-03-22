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
    navigate(`/resourcesgit/detail/${index}`);
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

  const sortResources = resources.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const mostRecentResource = sortResources.slice(0, 1)[0];

  return (
    <div className="profile-page">
      <div className="header">
        <h2> Welcome back, {user.email}! </h2>
        {/* <button onClick={ handleEditProfile }> Edit Profile </button> */}
      </div>
      <div>
        <div
          className="resource-card"
          key={mostRecentResource.id}
          onClick={() => showResource(mostRecentResource.id)}
        >
          <h3> {mostRecentResource.title} </h3>
          <h5> {mostRecentResource.type.join(", ")} </h5>
          <h4> {mostRecentResource.preview_text} </h4>
          <h5> Time Requirement: {mostRecentResource.time_requirement} </h5>
        </div>
      </div>
    </div>
  );
}

export default Profile;
