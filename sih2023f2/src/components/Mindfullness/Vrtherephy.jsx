// VRTherapySection.js

import React from 'react';

const VRTherapy = () => {
  return (
    <div className="p-4 bg-teal-800 text-white rounded-md shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">VR Therapy</h2>

      {/* Subheading */}
      <p className="text-gray-300 mb-6">
        Virtual Reality (VR) therapy is an innovative approach that uses immersive virtual environments
        to facilitate therapeutic interventions. Explore the futuristic realm of VR for mental well-being.
      </p>

      {/* VR Therapy Cards */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-teal-900 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Mindful Explorations</h3>
          <p className="text-gray-300">
            Engage in virtual environments designed for mindful exploration and relaxation.
          </p>
        </div>
        <div className="bg-teal-900 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2">Cognitive Challenges</h3>
          <p className="text-gray-300">
            Challenge your cognitive abilities with futuristic VR exercises for mental stimulation.
          </p>
        </div>
        {/* Add more VR therapy cards as needed */}
      </div>
    </div>
  );
};

export default VRTherapy;
