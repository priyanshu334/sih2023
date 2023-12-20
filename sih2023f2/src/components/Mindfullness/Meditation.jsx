// MeditationSection.js

import React from 'react';

const Meditation = () => {
  const meditationCards = [
    {
      title: 'Mindful Breathing',
      description: 'Practice deep and conscious breathing to bring calmness and focus.',
    },
    {
      title: 'Guided Visualization',
      description: 'Visualize peaceful scenes or scenarios to promote relaxation and positivity.',
    },
    {
      title: 'Body Scan Meditation',
      description: 'Focus on each part of your body, releasing tension and promoting awareness.',
    },
    {
      title: 'Loving-Kindness Meditation',
      description: 'Cultivate feelings of love and compassion towards yourself and others.',
    },
    // Add more meditation cards as needed
  ];

  return (
    <div className="p-4 bg-blue-100 text-gray-800 rounded-md shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Meditation</h2>

      {/* Subheading */}
      <p className="text-gray-600 mb-6">
        Meditation is a practice where an individual uses a technique – such as mindfulness,
        or focusing the mind on a particular object, thought, or activity – to train attention
        and awareness, and achieve a mentally clear and emotionally calm and stable state.
      </p>

      {/* Meditation Cards */}
      <div className="grid grid-cols-1 gap-4">
        {meditationCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meditation;
