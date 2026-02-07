import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Certification from "./Certification";
import Contact from "./Contact";
import Project from "./Project";
import './app.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />             {/* Default route */}
        <Route path="/about" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
