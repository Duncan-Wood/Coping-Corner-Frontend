import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../UserProvider";
import SearchBar from "./SearchBar";
import defaultImg from '../assets/coping corner logo.png'

export default function Resources() {
  const { user } = useContext(UserProvider);
  const { authenticated } = useContext(UserProvider);
  const { resources } = useContext(UserProvider);
  const [filteredResources, setFilteredResources] = useState([]);

  let navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };

  const showResource = (index) => {
    navigate(`/resources/detail/${index}`);
  };

  const filterResources = () => {
    let filtered = resources;
    if (!user && !authenticated) {
      filtered = filtered.filter((resource) => resource.user_id === 1);
    } else if (filteredResources.length < 1) {
      filtered = resources;
    } else if (filteredResources) {
      filtered = filteredResources;
    }
    return filtered;
  };

  const publicResources = filterResources();

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
      <div className="loggedout-resource-grid">
        {publicResources.map((resource) => (
          <div
            className="resource-card"
            key={resource.id}
            onClick={() => showResource(resource.id)}
          >
            <h1> {resource.title} </h1>
            <span className="category-for-card">TYPE</span>{" "}
            <h5 className="resource-type">{resource.type.join(", ")} </h5>
            <span className="category-for-card">FOR WHEN YOU'RE FEELING</span>
            <h5 className="resource-feeling">{resource.feeling.join(", ")} </h5>
            <h2 className="preview-text"> {resource.preview_text} </h2>
            <div className="container-for-image">
            {resource.optional_image ? (
              <img
                className="small-img-card"
                src={resource.optional_image}
                alt="resource"
              /> ) : (
              <img
                className="small-img-card"
                src={defaultImg}
                alt="default resource"
              />)}
            </div>
            <h5>
              {" "}
              <span className="category-for-card">TIME REQUIREMENT</span>
              {resource.time_requirement} minutes{" "}
            </h5>
            <div className="likes-container">
              <h5>{resource.likes} people love this!</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  let authenticatedResources;
  if (user) {
    authenticatedResources = (
      <div className="user_feed">
        <div>
          <button id="go-back" onClick={goBack}>
            Go Back
          </button>
        </div>
        <div className="search-bar-container">
          <SearchBar
            filteredResources={filteredResources}
            setFilteredResources={setFilteredResources}
          />
        </div>
        <div className="logged_resources_header">
          <h1>RESOURCES</h1>
        </div>
        <div className="loggedin-resource-grid">
          {publicResources.map((resource) => (
            <div
              className="resource-card"
              key={resource.id}
              onClick={() => showResource(resource.id)}
            >
              <h1 className="loggedTitle"> {resource.title} </h1>
              <span className="category-for-card">TYPE</span>{" "}
              <h5 className="resource-type">{resource.type.join(", ")} </h5>
              <span className="category-for-card">FOR WHEN YOU'RE FEELING</span>
              <h5 className="resource-feeling">
                {resource.feeling.join(", ")}{" "}
              </h5>
              <h2 className="preview-text"> {resource.preview_text} </h2>
              <div className="container-for-image">
              {resource.optional_image ? (
              <img
                className="small-img-card"
                src={resource.optional_image}
                alt="resource"
              /> ) : (
              <img
                className="small-img-card"
                src={defaultImg}
                alt="default resource"
              />)}
              </div>
              <h5>
                {" "}
                <span className="category-for-card">TIME REQUIREMENT</span>
                {resource.time_requirement} minutes{" "}
              </h5>
              <div className="likes-container">
                <h5>{resource.likes} people love this!</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      {authenticated && user ? authenticatedResources : publicResourcesContent}
    </div>
  );
}
