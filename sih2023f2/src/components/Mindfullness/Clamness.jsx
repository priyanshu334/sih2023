// CalmnessSection.js

import React from 'react';

const Calmness = () => {
  const calmnessAudioCards = [
    {
      title: 'Birdsongs Meditation',
      description: 'Relax to the soothing sounds of birdsongs in a peaceful natural setting.',
      audioThumbnail: 'path_to_thumbnail_1.jpg',
    },
    {
      title: 'Gentle Rainfall Ambience',
      description: 'Experience the calming effect of gentle rain falling in a tranquil environment.',
      audioThumbnail: 'path_to_thumbnail_2.jpg',
    },
    {
      title: 'Ocean Waves Meditation',
      description: 'Immerse yourself in the calming waves of the ocean for a peaceful meditation.',
      audioThumbnail: 'path_to_thumbnail_3.jpg',
    },
    {
      title: 'Forest Bliss Ambient Sounds',
      description: 'Enjoy the serene atmosphere of a forest with ambient sounds of nature.',
      audioThumbnail: 'path_to_thumbnail_4.jpg',
    },
    // Add more calmness audio cards as needed
  ];

  return (
    <div className="p-4 bg-orange-100 text-gray-800 rounded-md shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Calmness</h2>

      {/* Subheading */}
      <p className="text-gray-600 mb-6">
        Embrace calmness and tranquility with soothing sounds that promote relaxation and reduce stress.
      </p>

      {/* Calmness Audio Cards */}
      <div className="grid grid-cols-1 gap-4">
        {calmnessAudioCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={card.audioThumbnail}
              alt={`Thumbnail for ${card.title}`}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calmness;
