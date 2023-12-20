// ExerciseSection.js

import React from 'react';

const ExerciseSection = () => {
  const exerciseVideoCards = [
    {
      title: 'Full Body Workout at Home',
      description: 'A complete workout routine targeting all muscle groups without any equipment.',
      videoThumbnail: 'path_to_thumbnail_1.jpg',
    },
    {
      title: 'Yoga for Flexibility',
      description: 'Improve flexibility and release tension with a relaxing yoga session.',
      videoThumbnail: 'path_to_thumbnail_2.jpg',
    },
    {
      title: 'High-Intensity Interval Training (HIIT)',
      description: 'Burn calories and boost metabolism with a quick and intense HIIT workout.',
      videoThumbnail: 'path_to_thumbnail_3.jpg',
    },
    {
      title: 'Morning Stretch Routine',
      description: 'Start your day with a gentle stretching routine to enhance flexibility and energy.',
      videoThumbnail: 'path_to_thumbnail_4.jpg',
    },
    // Add more exercise video cards as needed
  ];

  return (
    <div className="p-4 bg-green-100 text-gray-800 rounded-md shadow-md">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-4">Exercise</h2>

      {/* Subheading */}
      <p className="text-gray-600 mb-6">
        Regular exercise has numerous health benefits, including improved mood, increased energy,
        and better overall well-being. Explore different exercise routines to find what works best for you.
      </p>

      {/* Exercise Video Cards */}
      <div className="grid grid-cols-1 gap-4">
        {exerciseVideoCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={card.videoThumbnail}
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

export default ExerciseSection;
