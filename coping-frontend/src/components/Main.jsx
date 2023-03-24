import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Resources from "./Resources";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Post from "./Post";
import Toolkit from "./Toolkit";
import LoggedHome from "./LoggedHome";
import ResourceDetailPage from "./ResourceDetailPage";
import EmergencyResources from "./EmergencyResources";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/LoggedHome" element={<LoggedHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post" element={<Post />} />
        <Route path="/toolkit" element={<Toolkit />} />
        <Route path="/resources/detail/:id" element={<ResourceDetailPage />} />
        <Route path="/emergency_resources" element={<EmergencyResources />} />
      </Routes>
    </div>
  );
}
