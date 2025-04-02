import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Brain, Rocket, Users } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-blue-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">
              AI Center of Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-400">
              Innovating the future through artificial intelligence at KJ Somaiya College of Engineering
            </p>
            <button
              onClick={() => navigate('/innovations')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
            >
              Our Innovations
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/50 p-6 rounded-xl shadow-lg border border-gray-800">
            <Sparkles className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Innovation Hub</h3>
            <p className="text-gray-400">
              Creating cutting-edge AI solutions to address real-world challenges
            </p>
          </div>
          <div className="bg-black/50 p-6 rounded-xl shadow-lg border border-gray-800">
            <Brain className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Research Excellence</h3>
            <p className="text-gray-400">
              Pushing the boundaries of AI technology through dedicated research
            </p>
          </div>
          <div className="bg-black/50 p-6 rounded-xl shadow-lg border border-gray-800">
            <Users className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Collaborative Growth</h3>
            <p className="text-gray-400">
              Building a community of AI enthusiasts and innovators
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">About AI COE</h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">
            The AI Center of Excellence at KJ Somaiya College of Engineering is dedicated to fostering innovation
            and excellence in artificial intelligence. We focus on developing cutting-edge solutions,
            conducting research, and nurturing talent in the field of AI.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home