import { useContext, useState } from "react";
import { UserProvider } from "../UserProvider";

export default function SearchBar({ filteredResources, setFilteredResources }) {
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

  const handleTypeChange = (event) => {
    const typeToAdd = event.target.value;
    if (selectedTypes.includes(typeToAdd)) {
      const selectedValues = selectedTypes.filter((type) => type !== typeToAdd);
      setSelectedTypes(selectedValues);
    } else {
      const selectedValues = [...selectedTypes, typeToAdd];
      setSelectedTypes(selectedValues);
    }
  };

  const handleFeelingChange = (event) => {
    const feelingToAdd = event.target.value;
    if (selectedFeelings.includes(feelingToAdd)) {
      const selectedValues = selectedFeelings.filter(
        (type) => type !== feelingToAdd
      );
      setSelectedFeelings(selectedValues);
    } else {
      const selectedValues = [...selectedFeelings, feelingToAdd];
      setSelectedFeelings(selectedValues);
    }
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const resourceFilter = resources.filter(
      (resource) =>
      resource.title.includes('Aromatherapy')
        // resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // resource.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // resource.type.some(selectedTypes) ||
        // resource.feelings.some(selectedFeelings) 
    );
    setFilteredResources(resourceFilter);
    // console.log(resources);

    console.log(filteredResources);
  };

  return (
    <form className="resourceDraft" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">Type:</label>
        <div className="typeCheckbox">
          {typeOptions.map((option) => (
            <div key={option.value}>
              <input
                type="checkbox"
                id={option.value}
                name={option.value}
                value={option.value}
                checked={selectedTypes.includes(option.value)}
                onChange={handleTypeChange}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="feeling">Feeling:</label>
        <div className="feelingCheckbox">
          {feelingOptions.map((option) => (
            <div key={option.value}>
              <input
                type="checkbox"
                id={option.value}
                name={option.value}
                value={option.value}
                checked={selectedFeelings.includes(option.value)}
                onChange={handleFeelingChange}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
