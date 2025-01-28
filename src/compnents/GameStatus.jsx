import React from 'react';

const GameStatus = ({ status, attempts, onReset }) => {
  const message =
    status === 'won'
      ? 'Congratulations! You guessed the word!'
      : status === 'lost'
      ? 'You ran out of attempts. Better luck next time!'
      : `Attempts left: ${attempts}`;

  return (
    <div className="mt-6 text-center">
      <p className="text-xl font-bold">{message}</p>
      {status !== 'playing' && (
        <button
          onClick={onReset}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default GameStatus;
