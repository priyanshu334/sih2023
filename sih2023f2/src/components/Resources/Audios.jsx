// AudioSection.js

import React from 'react';

const Audios = () => {
  const audioList = [
    {
      title: 'Mindful Meditation for Stress Relief',    
      speaker: 'Dr. Sarah Thompson',
      duration: '15 minutes',
    },
    {
      title: 'Managing Anxiety: Guided Breathing Exercise',
      speaker: 'Alex Johnson, M.A.',
      duration: '12 minutes',
    },
    {
      title: 'Positive Affirmations for Daily Well-Being',
      speaker: 'Emily Davis, Ph.D.',
      duration: '10 minutes',
    },
    {
      title: 'Sleep Relaxation: Nighttime Routine for Better Sleep',
      speaker: 'Chris Miller',
      duration: '20 minutes',
    },
    {
      title: 'Boosting Confidence: Self-Empowerment Talk',
      speaker: 'Sophia Brown, LCSW',
      duration: '18 minutes',
    },
    {
      title: 'Calm Your Mind: Mindfulness Session for Students',
      speaker: 'John Doe, M.Ed.',
      duration: '14 minutes',
    },
    // Add more audio objects as needed
  ];

  const handlePlayAudio = (audioTitle) => {
    // Implement your logic to play the selected audio
    console.log(`Playing audio: ${audioTitle}`);
  };

  return (
<div   className="bg-orange-600 bg-op p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Audio Content</h2>

      {/* Subheading */}
      <p className="text-gray-200 mb-6">Listen to audio content focused on mental health for students.</p>

      {/* Audio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {audioList.map((audio, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 relative"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1 text-white">{audio.title}</h3>
              <p className="text-gray-300">{`Speaker: ${audio.speaker}`}</p>
              <p className="text-gray-300">{`Duration: ${audio.duration}`}</p>
            </div>
            <button
className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-all duration-4"
onClick={() => handlePlayAudio(audio.title)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Audios;
