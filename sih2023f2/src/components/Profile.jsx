// ProfileSection.js

import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-200 text-gray-800 p-4">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold text-white">John Doe</h1>
        <img
          src="path_to_profile_image.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mt-4 border-4 border-white"
        />
      </div>

      {/* Profile Information */}
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2 text-white">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300"
          placeholder="John Doe"
          readOnly
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold mb-2 text-white">Email ID</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300"
          placeholder="john.doe@example.com"
          readOnly
        />
      </div>

      {/* Profile Actions */}
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
        <button className="bg-white text-blue-500 px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 mb-2 md:mb-0">
          History
        </button>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 mb-2 md:mb-0">
          Responses
        </button>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 mb-2 md:mb-0">
          My Views
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Profile;
    