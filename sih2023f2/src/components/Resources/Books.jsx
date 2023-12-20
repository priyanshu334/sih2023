// BooksSection.js
import React from 'react';

const BooksSection = () => {
  const booksList = [
    'Atomic Habits by James Clear',
    'The Power of Habit by Charles Duhigg',
    'Mindset: The New Psychology of Success by Carol S. Dweck',
    'The 7 Habits of Highly Effective People by Stephen R. Covey',
    'Thinking, Fast and Slow by Daniel Kahneman',
    'The Subtle Art of Not Giving a F*ck by Mark Manson',
    'Start with Why by Simon Sinek',
    'Deep Work: Rules for Focused Success in a Distracted World by Cal Newport',
  ];

  return (
<div   className="bg-orange-600 bg-op p-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Books</h2>

      {/* Subheading */}
      <p className="text-gray-200 mb-6">Explore books that can help you grow and transform your mindset.</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {booksList.map((book, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-30 p-3 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 md:w-1/2"
          >
            <h3 className="text-lg font-semibold mb-1 text-white">{book}</h3>
            <p className="text-gray-300">Author Name</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
