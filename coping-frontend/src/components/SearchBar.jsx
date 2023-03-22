import { useContext, useState } from "react";
import { UserProvider } from "../UserProvider";

export default function SearchBar({ handleSearch }) {

  const { resources } = useContext(UserProvider);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFeelings, setSelectedFeelings] = useState([]);

  const typeOptions = [
    { value: "meditation", label: "Meditation" },
    { value: "movement", label: "Movement" },
    { value: "mind-body", label: "Mind-Body" },
    { value: "distraction", label: "Distraction" },
    { value: "grounding", label: "Grounding" },
    { value: "affirmation", label: "Affirmation" },
  ];
  
  const feelingOptions = [
    { value: "angry", label: "Angry" },
    { value: "blah", label: "Blah" },
    { value: "fine", label: "Fine" },
    { value: "bad", label: "Bad" },
    { value: "afraid", label: "Afraid" },
    { value: "overwhelmed", label: "Overwhelmed" },
    { value: "under-stimulated", label: "Under-Stimulated" },
    { value: "calm", label: "Calm" },
    { value: "lonely", label: "Lonely" },
    { value: "guilty", label: "Guilty" },
    { value: "disconnected", label: "Disconnected" },
    { value: "tired", label: "Tired" },
    { value: "good", label: "Good" },
    { value: "sad", label: "Sad" },
    { value: "self-doubt", label: "Self-Doubt" },
    { value: "depressed", label: "Depressed" },
    { value: "frustrated", label: "Frustrated" },
    { value: "happy", label: "Happy" },
    { value: "totally_distraught", label: "Totally Distraught" },
    { value: "very_anxious", label: "Very Anxious" },
  ];
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedTypes(selectedValues);
  };

  const handleFeelingChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedFeelings(selectedValues);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredResources = resources
      .filter((resource) => {
        if (selectedTypes.length === 0) {
          return true;
        }
        return selectedTypes.some((type) =>
          resource.type.toLowerCase().includes(type.toLowerCase())
        );
      })
      .filter((resource) => {
        if (selectedFeelings.length === 0) {
          return true;
        }
        return selectedFeelings.some((feeling) =>
          resource.feeling.some((f) => f.toLowerCase().includes(feeling.toLowerCase()))
        );
      })
      .filter((resource) =>
        resource.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    handleSearch(filteredResources);
  };
  
function handleSearch(searchQuery, selectedTypes, selectedFeelings) {
    const filteredResources = resources.filter((resource) => {
      // Check if the resource's title or description contains the search query
      const titleMatch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
      const descriptionMatch = resource.description.toLowerCase().includes(searchQuery.toLowerCase());
  
      // Check if the resource's type matches any of the selected types
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(resource.type);
  
      // Check if the resource's feelings match any of the selected feelings
      const feelingsMatch =
        selectedFeelings.length === 0 ||
        selectedFeelings.some((feeling) => resource.feelings.includes(feeling));
  
      return titleMatch || descriptionMatch || (typeMatch && feelingsMatch);
    });
  
    // Call the handleSearch prop with the filtered resources
    handleSearch(filteredResources);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="type">Type:</label>
        <div>
          <select
            id="type"
            multiple
            value={selectedTypes}
            onChange={handleTypeChange}
          >
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="feeling">Feeling:</label>
        <div>
          <select
            id="feeling"
            multiple
            value={selectedFeelings}
            onChange={handleFeelingChange}
          >
            {feelingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
