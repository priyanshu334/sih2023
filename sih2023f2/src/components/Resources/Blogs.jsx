import React from 'react';

const Blogs = () => {
  const blogsList = [
    {
      title: 'The Art of Productive Reading',
      author: 'John Doe',
      imageUrl: 'path_to_image_1.jpg',
      date: 'January 15, 2023',
    },
    {
      title: 'Unlocking Creativity: A Guide for Everyone',
      author: 'Jane Smith',
      imageUrl: 'path_to_image_2.jpg',
      date: 'February 3, 2023',
    },
    {
      title: 'Embracing Change: A Journey to Self-Discovery',
      author: 'Alex Johnson',
      imageUrl: 'path_to_image_3.jpg',
      date: 'March 20, 2023',
    },
    {
      title: 'Finding Balance: Navigating Work and Personal Life',
      author: 'Emily Davis',
      imageUrl: 'path_to_image_4.jpg',
      date: 'April 8, 2023',
    },
    {
      title: 'Mindful Living: Practices for a Stress-Free Day',
      author: 'Chris Miller',
      imageUrl: 'path_to_image_5.jpg',
      date: 'May 12, 2023',
    },
    {
      title: 'The Science of Happiness: Pursuing Joy Every Day',
      author: 'Sophia Brown',
      imageUrl: 'path_to_image_6.jpg',
      date: 'June 5, 2023',
    },
  ];

  return (
    <div className="bg-orange-600 text-white rounded-md shadow-lg transition-all duration-300 p-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Blogs</h2>

      {/* Subheading */}
      <p className="text-gray-200 mb-6">Read insightful blogs that can broaden your perspectives.</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {blogsList.map((blog, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-30 p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={blog.imageUrl}
              alt={`Blog Image for ${blog.title}`}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-white">{blog.title}</h3>
            <p className="text-gray-300 mb-2">{`By ${blog.author} on ${blog.date}`}</p>
            <p className="text-gray-300">Short description of the blog post...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
