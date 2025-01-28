import React, { useState } from 'react';

const GuessInput = ({ onGuess, word }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length !== word.length) return; // Ensure input length matches word length
    onGuess(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          const value = e.target.value;
          // Prevent non-alphabetic characters and limit to word length
          if (/^[a-zA-Z]*$/.test(value) && value.length <= word.length) {
            setInput(value);
          }
        }}
        maxLength={word.length} // Dynamically set max length
        className="border-2 border-gray-300 p-2 rounded w-full text-lg"
        placeholder={`Enter a ${word.length}-letter word`}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        disabled={input.length !== word.length} // Disable if input length is not exact
      >
        Submit Guess
      </button>
    </form>
  );
};

export default GuessInput;
