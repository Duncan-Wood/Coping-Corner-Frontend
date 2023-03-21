import { useState } from "react";

export default function SearchBar({ handleSearch }) {
const [searchQuery, setSearchQuery] = useState("");

const handleInputChange = (event) => {
setSearchQuery(event.target.value);
};

const handleFormSubmit = (event) => {
event.preventDefault();
handleSearch(searchQuery);
};

return (
<form onSubmit={handleFormSubmit}>
<input
     type="text"
     placeholder="Search by type or feeling..."
     value={searchQuery}
     onChange={handleInputChange}
   />
<button type="submit">Search</button>
</form>
);
}