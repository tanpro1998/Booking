import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Room from "./pages/Room/Room";
import RoomItem from "./pages/Room/RoomItem";
import Slide from "./pages/Slide/Slide";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:roomSlug" element={<RoomItem />} />

        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Slide />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
