import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserProvider } from "../UserProvider";
import SearchBar from "./SearchBar";

export default function Dashboard() {
  const { resources } = useContext(UserProvider);
  const [filteredResources, setFilteredResources] = useState([]);
  const { mood } = useContext(UserProvider);

  let navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };

  const showResource = (index) => {
    navigate(`/resources/detail/${index}`);
  };

  const filterResources = () => {
    let filtered;
    if (filteredResources.length < 1) {
      filtered = resources;
    } else if (filteredResources) {
      filtered = filteredResources;
    }
    return filtered;
  };

  const resourcesFilter = filterResources();

  return (
    <div>
      <button id="go-back" onClick={goBack}>
        Go Back
      </button>

      <div className="search-bar-container">
        <SearchBar
          filteredResources={filteredResources}
          setFilteredResources={setFilteredResources}
        />
      </div>
      <Link to="/post">
        <button className="dashboard-add-post">+ ADD A NEW POST</button>
      </Link>
      <Link to="/toolkit">
        <button className="dashboard-view-toolkit">VIEW TOOLKIT</button>
      </Link>

      <div className="dashboard-grid">
        <h2 className="suggestions">
          Here are some suggestions for tools to use when you're feeling{" "}
          {mood ? <span>{mood}</span> : <span>anything</span>}:
        </h2>

        {resourcesFilter.map((resource) => (
          <div
            className="resource-card"
            key={resource.id}
            onClick={() => showResource(resource.id)}
          >
            <h1 className="loggedTitle"> {resource.title} </h1>
            <span className="category-for-card">TYPE</span>{" "}
            <h5 className="resource-type">{resource.type.join(", ")} </h5>
            <span className="category-for-card">FOR WHEN YOU'RE FEELING</span>
            <h5 className="resource-feeling">{resource.feeling.join(", ")} </h5>
            <h2 className="preview-text"> {resource.preview_text} </h2>
            <div className="container-for-image">
              <img className="small-img-card" src={resource.optional_image} alt="resource" />
            </div>
            <h5>
              {" "}
              <span className="category-for-card">TIME REQUIREMENT</span>
              {resource.time_requirement} minutes{" "}
            </h5>
            <div className="likes-container">
              <h6>{resource.likes} others love this!</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
