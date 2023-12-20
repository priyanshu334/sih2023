// Therapists.js

import React from 'react';

const TherapistCard = ({ name, designation, additionalInfo }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-500 mb-2">{designation}</p>
      <p className="text-sm">{additionalInfo}</p>
    </div>
  );
};

const Therapist = () => {
  const therapists = [
    {
      name: 'Dr. Sarah Thompson',
      designation: 'Clinical Psychologist',
      additionalInfo: 'Specializing in anxiety and depression.',
    },
    {
      name: 'John Doe, LMFT',
      designation: 'Licensed Marriage and Family Therapist',
      additionalInfo: 'Experienced in family counseling and relationships.',
    },
    // Add more therapists as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {therapists.map((therapist, index) => (
        <TherapistCard key={index} {...therapist} />
      ))}
    </div>
  );
};

export default Therapist;
