import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BookingScreen from "./screens/BookingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LogingScreen from "./screens/LogingScreen";
import HotelListScreen from "./screens/HotelListScreen";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<HomeScreen />} />
          <Route path="/book/:roomid" exact element={<BookingScreen />} />
          <Route path="/register" exact element={<RegisterScreen />} />
          <Route path="/login" exact element={<LogingScreen />} />
          <Route path="/hotelist" exact element={<HotelListScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
