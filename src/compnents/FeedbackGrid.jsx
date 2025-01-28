import React from 'react';

const FeedbackGrid = ({ guess, word }) => {
  const feedback = guess
    .split('')
    .map((char, index) => {
      if (word[index]?.toLowerCase() === char.toLowerCase()) return { char, status: 'correct' };
      if (word.toLowerCase().includes(char.toLowerCase())) return { char, status: 'present' };
      return { char, status: 'absent' };
    });

  return (
    <div className="grid grid-cols-6 gap-2 mt-4">
      {feedback.map((item, i) => (
        <div
          key={i}
          className={`p-4 text-center rounded ${
            item.status === 'correct'
              ? 'bg-green-500'
              : item.status === 'present'
              ? 'bg-yellow-500'
              : 'bg-red-500'
          }`}
        >
          {item.char}
        </div>
      ))}
    </div>
  );
};

export default FeedbackGrid;
