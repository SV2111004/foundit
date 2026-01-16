import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import CreateItem from "./pages/CreateItem";
import MyItems from "./pages/MyItems";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/items/lost" element={<LostItems />} />
      <Route path="/items/found" element={<FoundItems />} />
      <Route path="/items/create" element={<CreateItem />} />
      <Route path="/my-items" element={<MyItems />} />
    </Routes>
  );
}

export default App;
