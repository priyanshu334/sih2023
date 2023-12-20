// MindfulnessSection.js

import React from 'react';
import { Link } from 'react-router-dom';

const Mindfulness = () => {
  return (
    <>
    <div className="p-4 bg-gradient-to-br from-blue-500 via-green-500 to-teal-500 text-white rounded-md shadow-lg transition-all duration-300">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Mindfulness</h2>

      {/* Subheading */}
      <p className="text-gray-200 mb-6">Discover how mindfulness can help students grow and thrive.</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Meditation Card */}
        <Link to='/meditation'>
        <div className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-white">Meditation</h3>
          <p className="text-gray-300">Practice meditation for mental clarity and focus.</p>
        </div>
        </Link>

        {/* Exercise Card */}
        <Link to='/excercies'>
        <div className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-white">Exercise</h3>
          <p className="text-gray-300">Engage in mindful exercises for physical and mental well-being.</p>
        </div>
        </Link>
        <Link to='/yoga'>
        {/* Yoga Card */}
        <div className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-white">Yoga</h3>
          <p className="text-gray-300">Explore the benefits of yoga for relaxation and flexibility.</p>
        </div>
        </Link>
  <Link to='/calmness'>
        {/* Calmness Card */}
        <div className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-white">Calmness</h3>
          <p className="text-gray-300">Achieve a sense of calmness through mindful practices.</p>
        </div>
        </Link>
        <Link to="/bineural">
        {/* Binaural Beats Card */}
        <div className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-white">Binaural Beats</h3>
          <p className="text-gray-300">Experience the benefits of binaural beats for relaxation and focus.</p>
        </div>
        </Link>
      <Link to='/musictherephy'>       {/* Music Therapy Card */}
        <div className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-white">Music Therapy</h3>
          <p className="text-gray-300">Explore how music can be therapeutic for mindfulness and stress relief.</p>
        </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Mindfulness;
