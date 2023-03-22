import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserProvider } from "../UserProvider";
import SearchBar from "./SearchBar";

export default function Dashboard() {
  const { resources } = useContext(UserProvider);
  const { mood, setMood } = useContext(UserProvider);

  let navigate = useNavigate();
  const BackToMood = () => {
    setMood(null);
    navigate("/loggedhome");
  };
  const showResource = (index) => {
    navigate(`/resources/detail/${index}`);
  };

  return (
    <div>
      <button id="go-back" onClick={BackToMood}>
        Go Back
      </button>
      <div>
        <div className="search-bar-container">
          <SearchBar />
        </div>
        {resources.map(
          (resource) => (
            console.log(resources),
            (
              <div
                className="resource-card"
                key={resource.id}
                onClick={() => showResource(resource.id)}
              >
                <h3>{resource.title}</h3>
                <h5>{resource.type.join(", ")}</h5>
                <h6>by: {resource.User.username}</h6>
                <h4>{resource.preview_text}</h4>
                <h5>Time Requirement: {resource.time_requirement}</h5>
                <div className="likes-container">
                  {/* <h6>star</h6> */}
                  {/* <button>like</button> */}
                  <h6>{resource.likes} others love this!</h6>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
