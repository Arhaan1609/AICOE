import React from 'react';
import { MessageSquare } from 'lucide-react';

const Innovations = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">Our Innovations</h1>
        
        <div className="bg-black/50 rounded-xl shadow-lg border border-gray-800 p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4 mb-6">
            <MessageSquare className="h-8 w-8 text-blue-400" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Eduspeare</h2>
          </div>
          <p className="text-gray-400 text-lg">
            Eduspeare is an innovative chatbot developed for KJ Somaiya College, designed to assist
            students with their academic queries and college-related information. This AI-powered
            solution enhances the student experience by providing instant, accurate responses to
            common questions and guidance on various aspects of college life.
          </p>
        </div>

        <div className="mt-8 text-center text-gray-500">
          More exciting projects coming soon!
        </div>
      </div>
    </div>
  );
}

export default Innovations