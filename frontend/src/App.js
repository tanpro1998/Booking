import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Available from "./components/Available/Available";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Booking from "./pages/Booking/Booking";
import Checkout from "./pages/Checkout/Checkout";
import Dining from "./pages/Dining/Dining";
import Existing from "./pages/Existing/Existing";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Room from "./pages/Room/Room";
import RoomItem from "./pages/Room/RoomItem";
import Success from "./pages/Success/Success";
import Tour from "./pages/Tour/Tour";
import "./app.scss";
import ScrollToTop from "./components/Scroll/ScrollToTop";
function App() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/rooms/:roomSlug" element={<RoomItem />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/tours" element={<Tour />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/available" element={<Available />} />
          <Route path="/booking/existing" element={<Existing />} />
          {currentUser ? (
            <Route path="/booking/checkout" element={<Checkout />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          <Route path="/booking/success" element={<Success />} />
          <Route path="/register" element={<Register />} />
          {!currentUser ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
