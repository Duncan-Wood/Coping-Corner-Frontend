import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../UserProvider";
import SearchBar from "./SearchBar";

export default function Resources() {
  const { user } = useContext(UserProvider);
  const { authenticated } = useContext(UserProvider);

  const { resources } = useContext(UserProvider);
  const [filteredResources, setFilteredResources] = useState([])

  let navigate = useNavigate();
  const showResource = (index) => {
    navigate(`/resources/detail/${index}`);
  };

  //further if/else statements could be added to check if user has mood for dashboard
  const filterResources = () => {
    let filtered = resources;
    //shows HQ resources if user is not logged in
    if (!user && !authenticated) {
      filtered = filtered.filter((resource) => resource.user_id === 1);
    } else if (filteredResources !== []) {
      filtered = resources
    } else if (filteredResources) {
      filtered = filteredResources
    }
    return filtered;
  };


  const publicResources = filterResources();

  //What will display on Resources page if user is not logged in
  const publicResourcesContent = (
    <div className="user_feed">
      <div className="unlogged-resources-header">
        <h1>POPULAR RESOURCES</h1>
        <h2>BY COPING CORNER HQ</h2>
      </div>
      <div className="please-register">
        <h5>
          TO VIEW OUR WHOLE LIBRARY OF RESOURCES, PLEASE REGISTER A
          <span style={{ color: "cyan" }}> FREE ACCOUNT </span>
          OR LOG IN NOW!
        </h5>
      </div>
      {publicResources.map((resource) => (
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

  //What will display on Resources page if user is logged in
  let authenticatedResources;
  if (user) {
    authenticatedResources = (
      <div className="user_feed">
        <div className="search-bar-container">
        <SearchBar filteredResources={filteredResources} setFilteredResources={setFilteredResources}/>          <h4>Search Bar Goes Here</h4>
        </div>
        <div className="logged_resources_header">
          <h1>POPULAR RESOURCES</h1>
        </div>
        {publicResources.map((resource) => (
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

  return (
    <div>
      {authenticated && user ? authenticatedResources : publicResourcesContent}
    </div>
  );
}
