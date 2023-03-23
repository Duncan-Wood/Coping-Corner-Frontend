import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../UserProvider";
// import SearchBar from "./SearchBar";

export default function Resources() {
  const { user } = useContext(UserProvider);
  const { authenticated } = useContext(UserProvider);

  const { resources } = useContext(UserProvider);

  let navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
    };

  const showResource = (index) => {
    navigate(`/resources/detail/${index}`);
  };

  //further if/else statements could be added to check if user has mood for dashboard
  const showPublicResources = () => {
    let filtered = resources;
    //shows HQ resources if user is not logged in
    if (!user && !authenticated) {
      filtered = filtered.filter((resource) => resource.user_id === 1);
    }
    return filtered;
  };

  const publicResources = showPublicResources();

  //What will display on Resources page if user is not logged in
  const publicResourcesContent = (
    <div className="user_feed_loggedout">
      <div className="unlogged-resources-header">
        <h1>POPULAR RESOURCES</h1>
        <h2>BY COPING CORNER HQ</h2>
      </div>
      <div className="please-register">
        <h5 className="viewmore">
          TO VIEW OUR WHOLE LIBRARY OF RESOURCES, PLEASE REGISTER A
          <span className="freeaccount"> FREE ACCOUNT </span>
          OR LOG IN NOW!
        </h5>
      </div>
      <div className = "loggedout-resource-grid">
      {publicResources.map((resource) => (
        // console.log(publicResources)
        <div className="resource-card" key={resource.id} onClick={() => showResource(resource.id)}
        >
                <h1> {resource.title} </h1>
                <span className="category-for-card">TYPE</span> <h5 className="resource-type">{resource.type.join(", ")} </h5>
                <span className="category-for-card">FOR WHEN YOU'RE FEELING</span><h5 className="resource-feeling">{resource.feeling.join(", ")} </h5>
                <h2 className="preview-text"> {resource.preview_text} </h2>
                <div className="container-for-image">
                  <img className="small-img-card" src={resource.optional_image} />
                </div>
                <h5> <span className="category-for-card">TIME REQUIREMENT</span>{resource.time_requirement} minutes </h5>
                <div className="likes-container">
                <h5>{resource.likes} people love this!</h5>
                </div>
        
      </div>))}
      </div></div>
)

  //What will display on Resources page if user is logged in
  let authenticatedResources;
  if (user) {
    authenticatedResources = (
      <div className="user_feed">
            <div>
        <button id="go-back" onClick={goBack}>
        Go Back
      </button></div>
        <div className="search-bar-container">
          {/* <SearchBar handleSearch={handleSearch}/> */}
          <h4>Search Bar Goes Here</h4>
        </div>
        <div className="logged_resources_header">
          <h1>RESOURCES</h1>
        </div>
        <div className = "loggedin-resource-grid">
        {publicResources.map((resource) => (
          <div className="resource-card" key={resource.id} onClick={() => showResource(resource.id)}
          >
                  <h1 className = "loggedTitle"> {resource.title} </h1>
                  <span className="category-for-card">TYPE</span> <h5 className="resource-type">{resource.type.join(", ")} </h5>
                  <span className="category-for-card">FOR WHEN YOU'RE FEELING</span><h5 className="resource-feeling">{resource.feeling.join(", ")} </h5>
                  <h2 className="preview-text"> {resource.preview_text} </h2>
                  <div className="container-for-image">
                    <img className="small-img-card" src={resource.optional_image} />
                  </div>
                  <h5> <span className="category-for-card">TIME REQUIREMENT</span>{resource.time_requirement} minutes </h5>
                  <div className="likes-container">
                    <h5>{resource.likes} people love this!</h5>
                  </div>
          
        </div>))}
        </div></div>
  )}
  return (
    <div>
      {authenticated && user ? authenticatedResources : publicResourcesContent}
    </div>
  );
}
