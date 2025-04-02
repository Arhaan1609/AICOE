import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/80 backdrop-blur-sm border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">AI COE</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/team" className="text-gray-400 hover:text-blue-400 transition-colors">
              Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar