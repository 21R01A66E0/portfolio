import React from "react";
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from  "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app-wrapper">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}
export default App