import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../UserProvider";
// import SearchBar from "./SearchBar";

export default function Resources() {
  const { user } = useContext(UserProvider);
  const { authenticated } = useContext(UserProvider);

  const { resources } = useContext(UserProvider);

  // const [searchQuery, setSearchQuery] = useState("");
  // const [selectedTypes, setSelectedTypes] = useState([]);
  // const [selectedFeelings, setSelectedFeelings] = useState([]);

  let navigate = useNavigate();

  const showResource = (index) => {
    navigate(`/resourcesgit/detail/${index}`);
  };

  //further if/else statements could be added to check if user has mood for dashboard
  const filterResources = () => {
    let filtered = resources;
    //shows HQ resources if user is not logged in
    if (!user && !authenticated) {
      filtered = filtered.filter((resource) => resource.user_id === 1);
    }

    // if (searchQuery) {
    //   filtered = filtered.filter((resource) =>
    //     resource.title.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    // }

    // if (selectedTypes.length > 0) {
    //   filtered = filtered.filter((resource) =>
    //     selectedTypes.includes(resource.type)
    //   );
    // }

    // if (selectedFeelings.length > 0) {
    //   filtered = filtered.filter((resource) =>
    //     selectedFeelings.some((feeling) => resource.feelings.includes(feeling))
    //   );
    // }

    return filtered;
  };

  const filteredResources = filterResources();

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
      {filteredResources.map((resource) =>
        console.log(filteredResources)(
          <div
            className="resource-card"
            key={resource.id}
            onClick={() => showResource(resource.id)}
          >
            <h3>{resource.title}</h3>
            <h5>by: {resource.User.username}</h5>
          </div>
        )
      )}
    </div>
  );

  //What will display on Resources page if user is logged in
  let authenticatedResources;
  if (user) {
    authenticatedResources = (
      <div className="user_feed">
        <div className="search-bar-container">
          {/* <SearchBar handleSearch={handleSearch}/> */}
          <h4>Search Bar Goes Here</h4>
        </div>
        <div className="logged_resources_header">
          <h1>POPULAR RESOURCES</h1>
        </div>
        {filteredResources.map((resource) =>
          console.log(filteredResources)(
            <div
              className="resource-card"
              key={resource.id}
              onClick={() => showResource(resource.id)}
            >
              <h3>{resource.title}</h3>
              <h5>by: {resource.User.username}</h5>
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div>
      {authenticated && user ? authenticatedResources : publicResourcesContent}
    </div>
  );
}
