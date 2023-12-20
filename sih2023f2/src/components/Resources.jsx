// ResourcesSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hover: {
    scale: 1.1,
  },
};

const ResourcesSection = () => {
  return (
<div   className="bg-orange-600 bg-op p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">

      {/* <h1 className='font-bold '>Videos to understand mental health better</h1> */}
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Resources</h2>

      {/* Subheading */}
      <p className="text-gray-200 mb-6">Explore various resources that can help improve your mental health.</p>

      {/* Search Bar */}
      <div className="flex items-center mb-6 bg-white bg-opacity-20 rounded-md p-2 shadow-md">
        <input
          type="text"
          placeholder="Search for resources"
          className="flex-1 bg-transparent border-none px-4 py-2 focus:outline-none text-white"
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-md transition-all duration-300 transform hover:scale-105">
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Books Card */}
        <Link to='/books'>
          <motion.div
            className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">Books</h3>
            <p className="text-gray-300">Discover insightful books to support your mental well-being.</p>
          </motion.div>
        </Link>

        {/* Blogs Card */}
        <Link to='/blogs'>
          <motion.div
            className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">Blogs</h3>
            <p className="text-gray-300">Read informative blogs on mental health and wellness.</p>
          </motion.div>
        </Link>

        {/* Videos Card */}
        <Link to='/videos'>
          <motion.div
            className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">Videos</h3>
            <p className="text-gray-300">Watch educational videos for mental health awareness.</p>
          </motion.div>
        </Link>

        {/* Audio Card */}
        <Link to='/audio'>
          <motion.div
            className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">Audio</h3>
            <p className="text-gray-300">Listen to calming audio content for relaxation and mindfulness.</p>
          </motion.div>
        </Link>

      </div>

      {/* Podcasts Card */}
      <Link to='/podcast'>
        <motion.div
          className="bg-white bg-opacity-30 p-4 rounded-md shadow-md mt-4 transition-all duration-300"
          variants={cardVariants}
          whileHover="hover"
        >
          <h3 className="text-2xl font-semibold mb-2 text-white">Podcasts</h3>
          <p className="text-gray-300">Tune in to podcasts discussing mental health and well-being.</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default ResourcesSection;
