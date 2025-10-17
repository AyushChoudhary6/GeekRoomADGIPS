import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Home from './pages/Home';
import Events from './pages/Events';
import Vedathon from './pages/Vedathon';
import CodeVeda from './pages/CodeVeda';
import MouseGlow from './components/MouseGlow';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white">
        {/* Mouse glow sits at the top level so it can cover the viewport */}
        <MouseGlow />

        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/vedathon" element={<Vedathon />} />
            <Route path="/events/CodeVeda" element={<CodeVeda />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </main>

        <Footer />
       
      </div>
    </Router>
  );
}

export default App;