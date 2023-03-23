import { useState } from "react";

export default function Post() {
  const { user } = useContext(UserProvider);
  const { authenticated } = useContext(UserProvider);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const handleResources = async () => {
      const results = await GetResources();
      setResources(results);
      console.log(resources);
    };
    handleResources();
  }, []);

  if (user && authenticated) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(e.target.value)}
          />{" "}
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
