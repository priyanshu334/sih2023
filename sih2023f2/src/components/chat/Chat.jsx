// ChatSection.js

import React from 'react';
import { FaHome, FaUserFriends, FaUserCircle, FaComments } from 'react-icons/fa';

const ChatSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      {/* Top Bar */}
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Chat</h1>
        </div>
        <div className="flex space-x-4">
          <div className="cursor-pointer">
            <FaHome size={24} />
          </div>
          <div className="cursor-pointer">
            <FaUserFriends size={24} />
          </div>
          <div className="cursor-pointer">
            <FaUserCircle size={24} />
          </div>
          <div className="cursor-pointer">
            <FaComments size={24} />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md mr-2">
          Trending
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md shadow-md">
          Newest
        </button>
      </div>

      {/* Chat Profiles */}
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-2">
            <img
              src={`path_to_profile_image_${index}.jpg`}
              alt={`Profile ${index}`}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <p className="text-sm font-semibold">User {index}</p>
              <p className="text-xs text-gray-500">12:34 PM</p>
            </div>
          </div>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            eget libero arcu.
          </p>
          <div className="flex items-center space-x-2">
            <div className="cursor-pointer">
              {/* Like icon */}
              <i className="far fa-thumbs-up text-blue-500"></i>
            </div>
            <div className="cursor-pointer">
              {/* Comment icon */}
              <i className="far fa-comment text-blue-500"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSection;
