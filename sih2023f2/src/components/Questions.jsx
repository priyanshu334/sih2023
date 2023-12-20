import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import backgroundImage from './public/bg.png';

const Question = () => {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#A9D5EE',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    maxWidth: '300px',
    width: '100%',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <motion.div
      className="min-h-screen"
      style={{
        ...containerStyle,
        opacity: 0,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-xs w-full bg-white p-6 rounded-lg shadow-md md:max-w-md lg:max-w-md xl:max-w-md"
        style={contentStyle}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-lg lg:text-xl font-medium mb-2">
        How much time are you putting into...                </h1>
        <br />
        <div className="mb-4">
          <h3 className="text-lg lg:text-xl font-medium mb-2">Sleep :</h3>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />
          <span className="text-sm">{/* Add scaling numbers or labels here, if needed */}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Less than 4</span>
          <span>4-6</span>
          <span>6-8</span>
          <span>10+</span>
        </div>

        <div className="mb-6">
          <h3 className="text-lg lg:text-xl font-medium mb-2">Physical activities :</h3>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>Less than 4</span>
          <span>4-6</span>
          <span>6-8</span>
          <span>10+</span>
        </div>

        <div className="mb-4">
          <h3 className="text-lg lg:text-xl font-medium mb-2">Study time :</h3>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm">
        <span>Less than 4</span>
          <span>4-6</span>
          <span>6-8</span>
          <span>10+</span>
        </div>
        <div className="mb-6">
          <h3 className="text-lg lg:text-xl font-medium mb-2">Social activities :</h3>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm">
        <span>Less than 2</span>
          <span>2-4</span>
          <span>4-6</span>
          <span>6+</span>
        </div>

        {/* Next Page Button */}
        <div className="mt-6">
          <Link to="/home">
            <motion.button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Add logic to navigate to the next page
                console.log('Next Page Clicked');
              }}
            >
              Confirm
            </motion.button>
          </Link>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Question;
