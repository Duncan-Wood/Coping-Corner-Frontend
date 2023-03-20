import { useState, useEffect, useContext } from "react";
import { GetResources } from "../Services/ResourceServices";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../UserProvider";

export default function Resources() {
  const { user } = useContext(UserProvider);
  const { authenticated } = useContext(UserProvider);
  const [resources, setResources] = useState([]);
  let navigate = useNavigate();

  let arrayTypes = [
    "type_meditation",
    "type_movement",
    "type_distraction",
    "type_grounding",
    "type_affirmation",
  ];

  useEffect(() => {
    const handleResources = async () => {
      const results = await GetResources();
      setResources(results);
    };
    handleResources();
  }, []);

  const handleFilteredResources = () => {
    return resources.filter((resource) => resource.user_id === 1)
    console.log(filteredResources)
  }
  const filteredResources = !user && !authenticated ? handleFilteredResources() : resources;

  return (
    <div className="user_feed">
      {filteredResources.map((resource) => (
        <div className="resource-card" key={resource.id}>
          <h3>{resource.title}</h3>
          {/* <h5>by: {resource.User.username}</h5> */}
        </div>
      ))}
    </div>
  )
}
