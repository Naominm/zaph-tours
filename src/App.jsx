import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import DestinationPage from "./pages/Destination/Destination";
import TripTypes from "./pages/TripTypes/TripTypes";
import ContactPage from "./pages/Contact/Contact";
import ScrollToTop from "./components/Scroll/Sroll";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<DestinationPage />} />
        <Route path="/TripTypes" element={<TripTypes />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTop/>
    </>
  );
}

export default App;
