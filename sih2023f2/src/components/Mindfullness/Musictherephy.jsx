import React from 'react';

const MusicTherapySection = () => {
  return (
    <div className="p-4 bg-indigo-800 text-white rounded-md shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Music Therapy</h2>

      {/* Subheading */}
      <p className="text-gray-300 mb-6">
        Music therapy is an evidence-based therapeutic approach that uses the power of music
        to enhance physical, emotional, cognitive, and social well-being. Explore the mysterious
        and healing effects of music on different brain states.
      </p>

      {/* Music Therapy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-purple-900 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Calming Melodies</h3>
          <p className="text-gray-300">
            Experience the soothing and mysterious tunes that promote relaxation and reduce stress.
          </p>
        </div>
        <div className="bg-purple-900 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Energizing Beats</h3>
          <p className="text-gray-300">
            Immerse yourself in mysterious rhythms and beats that boost energy and focus.
          </p>
        </div>
        <div className="bg-purple-900 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Soulful Jazz</h3>
          <p className="text-gray-300">
            Discover the emotional and expressive world of soulful jazz melodies.
          </p>
        </div>
        <div className="bg-purple-900 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Healing Harmonies</h3>
          <p className="text-gray-300">
            Explore harmonies and melodies designed to promote healing and well-being.
          </p>
        </div>
        {/* Add more music therapy cards as needed */}
      </div>
    </div>
  );
};

export default MusicTherapySection;
