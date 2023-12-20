// TaskPage.js

import React from 'react';

const Task1 = () => {
  const backgroundImageUrl = 'path_to_background_image.jpg';
  const currentTask = 'Complete a 10-minute mindfulness exercise';

  const handleSkipTask = () => {
    // Logic to skip the task
    console.log('Task skipped');
  };

  const handleChangeTask = () => {
    // Logic to change the task
    console.log('Task changed');
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${'blob:https://web.whatsapp.com/b791ca02-7755-4956-9a94-6c0458ac9fb6'})` }}>
      <div className="flex flex-col h-full justify-center items-center">
        <div className="bg-white p-8 rounded-md shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">{currentTask}</h2>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={handleSkipTask}
            >
              Skip
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              onClick={handleChangeTask}
            >
              Change Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task1;
