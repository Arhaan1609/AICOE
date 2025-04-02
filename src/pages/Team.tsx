import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Layout, Megaphone, Briefcase, Server } from 'lucide-react';

const teams = [
  {
    name: 'Office of Architecture',
    icon: Layout,
    path: 'architecture',
    description: 'Designing and planning AI solutions'
  },
  {
    name: 'DTX',
    icon: Server,
    path: 'dtx',
    description: 'Digital Transformation initiatives'
  },
  {
    name: 'Marketing',
    icon: Megaphone,
    path: 'marketing',
    description: 'Promoting AI COE initiatives'
  },
  {
    name: 'PMO',
    icon: Briefcase,
    path: 'pmo',
    description: 'Project Management Office'
  },
  {
    name: 'Infrastructure Team',
    icon: Server,
    path: 'infrastructure',
    description: 'Managing technical infrastructure'
  }
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">Our Teams</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => {
            const Icon = team.icon;
            return (
              <div
                key={team.path}
                onClick={() => navigate(`/team/${team.path}`)}
                className="bg-black/50 rounded-xl shadow-lg border border-gray-800 p-6 cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Icon className="h-8 w-8 text-blue-400" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">{team.name}</h3>
                </div>
                <p className="text-gray-400">{team.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team