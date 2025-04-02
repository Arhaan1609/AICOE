import React from 'react';
import { useParams } from 'react-router-dom';

const TeamDetails = () => {
  const { department } = useParams();

  const formatDepartmentName = (dept: string) => {
    switch (dept) {
      case 'architecture':
        return 'Office of Architecture';
      case 'dtx':
        return 'DTX';
      case 'marketing':
        return 'Marketing';
      case 'pmo':
        return 'PMO';
      case 'infrastructure':
        return 'Infrastructure Team';
      default:
        return dept;
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">
          {formatDepartmentName(department || '')} Team
        </h1>
        <div className="bg-black/50 rounded-xl shadow-lg border border-gray-800 p-8">
          <p className="text-gray-400 text-center text-lg">
            Team members will be added soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamDetails