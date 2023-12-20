// PodcastSection.js
import React from 'react';

const PodcastSection = () => {
  const podcastList = [
    {
      title: 'Mindful Living Podcast',
      host: 'Dr. Sarah Thompson',
      thumbnailUrl: 'path_to_thumbnail_1.jpg',
      episodes: 52,
    },
    {
      title: 'Positive Mindset Hour',
      host: 'Alex Johnson, M.A.',
      thumbnailUrl: 'path_to_thumbnail_2.jpg',
      episodes: 45,
    },
    {
      title: 'The Wellness Journey',
      host: 'Emily Davis, Ph.D.',
      thumbnailUrl: 'path_to_thumbnail_3.jpg',
      episodes: 38,
    },
    {
      title: 'Tech Talks: Future Trends',
      host: 'Chris Miller',
      thumbnailUrl: 'path_to_thumbnail_4.jpg',
      episodes: 60,
    },
    {
      title: 'The Creative Mindset',
      host: 'Sophia Brown, LCSW',
      thumbnailUrl: 'path_to_thumbnail_5.jpg',
      episodes: 30,
    },
    {
      title: 'Inspire Your Day',
      host: 'John Doe, M.Ed.',
      thumbnailUrl: 'path_to_thumbnail_6.jpg',
      episodes: 42,
    },
    {
      title: 'Exploring Science',
      host: 'Jane Smith, Ph.D.',
      thumbnailUrl: 'path_to_thumbnail_7.jpg',
      episodes: 55,
    },
    {
      title: 'Business Insights Weekly',
      host: 'David Johnson',
      thumbnailUrl: 'path_to_thumbnail_8.jpg',
      episodes: 48,
    },
    // Add more podcast objects as needed
  ];

  const handlePlayPodcast = (podcastTitle) => {
    // Implement your logic to play the selected podcast
    console.log(`Playing podcast: ${podcastTitle}`);
  };

  return (
<div   className="bg-orange-600 bg-op p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
      {/* Podcast Cards */}
      <h2 className="text-4xl font-bold mb-4">Podcasts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {podcastList.map((podcast, index) => (
          <div
            key={index}
            className="bg-orange-600 bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
            <img
              src={podcast.thumbnailUrl}
              alt={`Thumbnail for ${podcast.title}`}
              className="w-full h-32 object-cover rounded-md mb-4 animate-pulse"
            />
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1 text-white">{podcast.title}</h3>
              <p className="text-gray-300">{`Host: ${podcast.host}`}</p>
              <p className="text-gray-300">{`Episodes: ${podcast.episodes}`}</p>
            </div>
            <button
              className="absolute bottom-4 right-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transform hover:rotate-6 transition-all duration-300"
              onClick={() => handlePlayPodcast(podcast.title)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastSection;
