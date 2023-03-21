import { useState, useEffect, useContext } from "react";
import { GetResources } from "../Services/ResourceServices";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../UserProvider";

export default function Resources() {
  const { user } = useContext(UserProvider);
  const { authenticated } = useContext(UserProvider);
  const [resources, setResources] = useState([]);
  let navigate = useNavigate();

  // let arrayTypes = [
  //   "type_meditation",
  //   "type_movement",
  //   "type_distraction",
  //   "type_grounding",
  //   "çtype_affirmation",
  // ];

  useEffect(() => {
    const handleResources = async () => {
      const results = await GetResources();
      setResources(results);
    };
    handleResources();
  }, []);

  const handleFilteredResources = () => {
    return resources.filter((resource) => resource.user_id === 1);
  };
  const filteredResources =
    !user && !authenticated ? handleFilteredResources() : resources;

  let authenticatedResources;
  if (user) {
    authenticatedResources = (
      <div className="user_feed">
        <div className="logged_resources_header">
          <h1>POPULAR RESOURCES</h1>
        </div>
        {filteredResources.map(
          (resource) => (
            console.log(filteredResources),
            (
              <div className="resource-card" key={resource.id}>
                <h3>{resource.title}</h3>
                <h5>by: {resource.User.username}</h5>
              </div>
            )
          )
        )}
      </div>
    );
  }

  const publicResources = (
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
      {filteredResources.map(
        (resource) => (
          console.log(filteredResources),
          (
            <div className="resource-card" key={resource.id}>
              <h3>{resource.title}</h3>
              <h5>by: {resource.User.username}</h5>
            </div>
          )
        )
      )}
    </div>
  );

  return (
    <div>
      <h1>test</h1>
      {authenticated && user ? authenticatedResources : publicResources}
    </div>
  );
}
