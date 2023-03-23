import React, { useState, useEffect, useContext } from "react";
import { GetResources } from "../Services/ResourceServices";
import { CheckSession } from "../Services/Auth";
import { UserProvider } from "../UserProvider";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const { authenticated } = useContext(UserProvider);
  const { resources } = useContext(UserProvider);
  const { setResources } = useContext(UserProvider);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFeelings, setSelectedFeelings] = useState([]);
  // const [showEditProfile, setShowEditProfile] = useState(false)

  let navigate = useNavigate();

  const showResource = (index) => {
    navigate(`/resourcesgit/detail/${index}`);
  };

  useEffect(() => {
    const handleGetResources = async () => {
      const results = await GetResources();
      setResources(results);
    };
    handleGetResources();
  }, []);
  useEffect(() => {
    const fetchResources = async () => {
      const results = await GetResources(
        searchQuery,
        selectedTypes,
        selectedFeelings
      );
      setResources(results);
    };
    fetchResources();
  }, [searchQuery, selectedTypes, selectedFeelings]);

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

  const filterResources = () => {
    let filtered = resources;
    //shows HQ resources if user is not logged in
    if (!user && !authenticated) {
      filtered = filtered.filter((resource) => resource.user_id === 1);
    }

    return filtered;
  };

  const filteredResources = filterResources();

  //   const handleEditProfile = () => {
  //     window.location.href = '/EditProfile'
  //   }

  if (loading) {
    return <p> Loading... </p>;
  }

  if (error) {
    return <p> Error: {error.message} </p>;
  }

  return (
    <div className="profile-page">
      <div className="header">
        <h2> Welcome back, {user.email}! </h2>
        {/* <button onClick={ handleEditProfile }> Edit Profile </button> */}
      </div>
      {filteredResources.map((resource) => (
        <div
          className="resource-card"
          key={resource.id}
          onClick={() => showResource(resource.id)}
        >
          <h3>{resource.title}</h3>
          <h5>by: {resource.User.username}</h5>
        </div>
      ))}
    </div>
  );
}

export default Profile;
