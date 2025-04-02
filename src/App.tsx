import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Innovations from './pages/Innovations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:department" element={<TeamDetails />} />
          <Route path="/innovations" element={<Innovations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;