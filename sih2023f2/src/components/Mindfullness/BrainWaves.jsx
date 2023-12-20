// BrainwavesSection.js

import React from 'react';

const Brainwaves = () => {
  const brainwaveCards = [
    {
      title: 'Alpha Waves',
      description: 'Enhance relaxation and reduce stress with alpha brainwaves.',
    },
    {
      title: 'Beta Waves',
      description: 'Improve focus, attention, and cognitive functions with beta brainwaves.',
    },
    {
      title: 'Theta Waves',
      description: 'Induce a deep meditative state and promote creativity with theta brainwaves.',
    },
    {
      title: 'Delta Waves',
      description: 'Facilitate deep sleep and regeneration with delta brainwaves.',
    },
    // Add more brainwave cards as needed
  ];

  const handlePlayBrainwaves = () => {
    // Implement your logic to play brainwave sounds
    console.log('Playing brainwave sounds');
  };

  return (
    <div className="p-4 bg-purple-100 text-gray-800 rounded-md shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Brainwaves</h2>

      {/* Subheading */}
      <p className="text-gray-600 mb-6">
        Explore the different types of brainwaves, each associated with unique mental states and functions.
      </p>

      {/* Brainwave Cards */}
      <div className="grid grid-cols-1 gap-4">
        {brainwaveCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Play Brainwaves Button */}
      <button
        className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
        onClick={handlePlayBrainwaves}
      >
        Play Brainwaves
      </button>
    </div>
  );
};

export default Brainwaves;
