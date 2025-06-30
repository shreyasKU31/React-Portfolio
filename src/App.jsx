import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import CertificatePage from "./pages/Certificates";

import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import SpaceBackground from "./components/SpaceBackground";
import BlackHoleLoader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for initial load
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <BlackHoleLoader />
  ) : (
    <div className="relative">
      <SpaceBackground />
      <Cursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CertificatePage />
      <Contact />
      <Footer />
    </div>
  );
}
