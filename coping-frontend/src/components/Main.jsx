// import axios from "axios";
// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

export default function Main() {
  // const [resources, setResources] = useState([])

  // useEffect(() => {
  //     const getResources = async () => {
  //         const response = await axios.get(`http://localhost:3001/api/resource/`)
  //         setResources((response.data));

  //     }
  //     getResources();
  //     console.log(resources)
  // }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        {/* <Route path="/resources" element={<Resources />}/> */}
      </Routes>
    </div>
  );
}
