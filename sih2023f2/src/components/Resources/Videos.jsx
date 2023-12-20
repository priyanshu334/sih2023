// VideoSection.js

import React from 'react';

const Videos = () => {
  const videoList = [
    {
      title: 'Mindful Yoga for Stress Relief',
      creator: 'Yoga With Emma',
      thumbnailUrl: 'path_to_thumbnail_1.jpg',
      duration: '10:30',
    },
    {
      title: 'Positive Vibes: Daily Affirmations',
      creator: 'Positive Mindset Channel',
      thumbnailUrl: 'path_to_thumbnail_2.jpg',
      duration: '5:45',
    },
    {
      title: 'Study Beats: Focus Music Playlist',
      creator: 'StudyHub Music',
      thumbnailUrl: 'path_to_thumbnail_3.jpg',
      duration: '1:00:00',
    },
    {
      title: 'Quick and Easy Healthy Recipes',
      creator: 'CookingJoy',
      thumbnailUrl: 'path_to_thumbnail_4.jpg',
      duration: '8:15',
    },
    // Add more video objects as needed
  ];

  const handlePlayVideo = (videoTitle) => {
    // Implement your logic to play the selected video
    console.log(`Playing video: ${videoTitle}`);
  };

  return (
<div   className="bg-orange-600 bg-op p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
    {/* Heading */}
    <h2 className="text-white text-4xl font-bold mb-4   ">Videos</h2>

      {/* Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {videoList.map((video, index) => (
          <div
            key={index}
            className="orange-600 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <img
              src={video.thumbnailUrl}
              alt={`Thumbnail for ${video.title}`}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <div className="orange-600">
              <h3 className="text-lg font-semibold mb-1 text-white">{video.title}</h3>
              <p className="text-gray-300">{`Creator: ${video.creator}`}</p>
              <p className="text-gray-300">{`Duration: ${video.duration}`}</p>
            </div>
            <button
              className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={() => handlePlayVideo(video.title)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
