import { useContext, useState } from "react";
import { UserProvider } from "../UserProvider";

export default function SearchBar({ filteredResources, setFilteredResources }) {
  const { resources } = useContext(UserProvider);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const resourceFilter = resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResources(resourceFilter);
  };

  return (
    <form className="resourceDraft" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
      <button className="submit-search-btn" type="submit">
        Search
      </button>
    </form>
  );
}
