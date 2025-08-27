import { useState, useEffect } from 'react';
import './NumberGuessing.css';

export default function NumberGuessing() {
    const [number] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [numOfGuess, setNumOfGuess] = useState(10);
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('Enter a number below');
    const [gameOver, setGameOver] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (gameOver) return;

        const guess = Number(input);

        if (!guess || guess < 1 || guess > 100) {
            return;
        }

        if (guess === number) {
            setMessage(`🎉 Bingo! The number was ${number}.`);
            setGameOver(true);
        } else if (guess < number) {
            setMessage('🔵 Too low! Please try again.');
            setNumOfGuess((prev) => prev - 1);
        } else {
            setMessage('🔴 Too high! Please try again.');
            setNumOfGuess((prev) => prev - 1);
        }

        setInput('');
    };

    // Check if game over because guesses run out
    useEffect(() => {
        if (numOfGuess <= 0 && !gameOver) {
            setMessage(`Game Over! The number was ${number}.`);
            setGameOver(true);
        }
    }, [numOfGuess, gameOver, number]);

    return (
        <div className='project-body'>
            <div id="container" className="pt-4 pb-4 shadow">
                <p><strong>Guess a number between 1 to 100</strong></p>
                <p id="outputtext">{message}</p>
                <form id="guessForm" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        id="userInput"
                        style={{ width: "10ch" }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={gameOver}
                        min={1}
                        max={100}
                    />
                    <button id="btn" disabled={gameOver}>Guess</button>
                </form>
                <p className="mt-3" id="guesses">
                    Remaining guesses: <strong>{numOfGuess}</strong>
                </p>
            </div>
        </div>
    );
}
