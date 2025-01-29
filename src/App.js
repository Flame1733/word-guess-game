import React, { useState } from 'react';
import WordList from './compnents/WordList';
import GuessInput from './compnents/GuessInput';
import FeedbackGrid from './compnents/FeedbackGrid';
import GameStatus from './compnents/GameStatus';

const App = () => {
    const [word, setWord] = useState(() => WordList());
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(6);
    const [status, setStatus] = useState('playing');

    const handleGuess = (input) => {
        if (status !== 'playing') return;
        if (attempts <= 0) {
            setStatus('lost');
            return;
        }

        setGuess(input);
        setAttempts(attempts - 1);

        if (input.toLowerCase() === word.toLowerCase()) {
            setStatus('won');
        } else if (attempts === 1) {
            setStatus('lost');
        }
    };

    const resetGame = () => {
        setWord(WordList());
        setGuess('');
        setAttempts(6);
        setStatus('playing');
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-4">Word Guessing Game v1</h1>
            <FeedbackGrid guess={guess} word={word} />
            <GuessInput onGuess={handleGuess} word={word} />

            <GameStatus status={status} attempts={attempts} onReset={resetGame} />
        </div>
    );
};

export default App;
