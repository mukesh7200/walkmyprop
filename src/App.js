import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Services"
import Faq from "./pages/Faq"
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./component/Footer";

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Service" element={<Service />} />
      {/* <Route exact path="/Faq" element={<Faq />} /> */}
      <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />

   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
