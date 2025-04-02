import React from 'react';
import { Target, Lightbulb, Users, Brain } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">About AI COE</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The AI Center of Excellence at KJ Somaiya College of Engineering is dedicated to
            advancing artificial intelligence research and development while nurturing the next
            generation of AI innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black/50 rounded-xl shadow-lg border border-gray-800 p-8">
            <Target className="h-12 w-12 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Our Mission</h2>
            <p className="text-gray-400">
              To foster innovation and excellence in artificial intelligence through research,
              development, and practical applications that benefit society and advance
              technological progress.
            </p>
          </div>

          <div className="bg-black/50 rounded-xl shadow-lg border border-gray-800 p-8">
            <Lightbulb className="h-12 w-12 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Our Vision</h2>
            <p className="text-gray-400">
              To become a leading center of excellence in AI, recognized for groundbreaking
              research, innovative solutions, and producing skilled professionals who shape
              the future of technology.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black to-blue-950 rounded-xl p-8 mb-16 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Research</h3>
              <p className="text-gray-400">Conducting cutting-edge research in various domains of artificial intelligence</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Innovation</h3>
              <p className="text-gray-400">Developing practical AI solutions for real-world challenges</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Education</h3>
              <p className="text-gray-400">Training and mentoring students in AI technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About