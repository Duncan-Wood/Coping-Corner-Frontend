// import axios from "axios";
// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Resources from './Resources'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Post from './Post'
import Toolkit from './Toolkit'
import LoggedHome from './LoggedHome'
import EditProfile from "./EditProfile";

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
        <Route path ="/LoggedHome" element={<LoggedHome/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/resources" element={<Resources />}/>
        <Route path="/profile" element = {<Profile />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/post" element={<Post />}/>
        <Route path = "/toolkit" element={<Toolkit />} />
        <Route exact path="/edit-profile" component={<EditProfile />} />

        {/* <Route path="/resources" element={<Resources />}/> */}
      </Routes>
    </div>
  );
}
