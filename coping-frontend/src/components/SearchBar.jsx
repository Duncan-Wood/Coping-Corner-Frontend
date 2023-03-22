// import { useState } from "react";

// const typeOptions = [
//   { value: "meditation", label: "Meditation" },
//   { value: "movement", label: "Movement" },
//   { value: "mind-body", label: "Mind-Body" },
//   { value: "distraction", label: "Distraction" },
//   { value: "grounding", label: "Grounding" },
//   { value: "affirmation", label: "Affirmation" },
// ];

// const feelingOptions = [
//   { value: "angry", label: "Angry" },
//   { value: "blah", label: "Blah" },
//   { value: "fine", label: "Fine" },
//   { value: "bad", label: "Bad" },
//   { value: "afraid", label: "Afraid" },
//   { value: "overwhelmed", label: "Overwhelmed" },
//   { value: "under-stimulated", label: "Under-stimulated" },
//   { value: "calm", label: "Calm" },
//   { value: "lonely", label: "Lonely" },
//   { value: "extremely-irritable", label: "Extremely irritable" },
//   { value: "tired", label: "Tired" },
// ];

// export default function SearchBar({ handleSearch }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedFeelings, setSelectedFeelings] = useState([]);

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleTypeChange = (event) => {
//     const selectedValues = Array.from(
//       event.target.selectedOptions,
//       (option) => option.value
//     );
//     setSelectedTypes(selectedValues);
//   };

//   const handleFeelingChange = (event) => {
//     const selectedValues = Array.from(
//       event.target.selectedOptions,
//       (option) => option.value
//     );
//     setSelectedFeelings(selectedValues);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     handleSearch(searchQuery, selectedTypes, selectedFeelings);
//   };
  

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div>
//         <label htmlFor="type">Type:</label>
//         <div>
//           <select
//             id="type"
//             multiple
//             value={selectedTypes}
//             onChange={handleTypeChange}
//           >
//             {typeOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="feeling">Feeling:</label>
//         <div>
//           <select
//             id="feeling"
//             multiple
//             value={selectedFeelings}
//             onChange={handleFeelingChange}
//           >
//             {feelingOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div>
//         <input
//           type="text"
//           id="search"
//           value={searchQuery}
//           onChange={handleInputChange}
//           placeholder="Search..."
//         />
//       </div>
//       <button type="submit">Search</button>
//     </form>
//   );
// }
