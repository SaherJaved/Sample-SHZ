import React from "react";
import Navbar from "./MyComponents/Navbar";
import HeroSection from './MyComponents/HeroSection';
import FeatureSection from './MyComponents/FeatureSection';
import ImageSection from './MyComponents/ImageSection';
import ContactSection from './MyComponents/ContactSection';
import Feedback from './MyComponents/Feedback';
import Footer from './MyComponents/Footer'; 
import About from './MyComponents/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <Router>
    <Navbar />
   < HeroSection />
   < FeatureSection />
   < About />
   < ImageSection />
   < Feedback />
   < ContactSection />
   <Footer />



    <Routes>
        <Route path="/" exact />
    </Routes>
    </Router>
    </>
  );
}

export default App;
