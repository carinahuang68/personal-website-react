import './ScoreKeeper.css';
import { useState, useEffect, useRef } from 'react'

export default function ScoreKeeper() {
    const [numPlayers, setNumPlayers] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [scores, setScores] = useState([]);
    const hasPrompted = useRef(false);

    useEffect(() => {
        if (!hasPrompted.current) {
            hasPrompted.current = true;
            const value = Number(prompt("Please enter the number of players"));
            setNumPlayers(value);
        }
    }, []); // runs only once on mount

    useEffect(() => {
        if (numPlayers > 0) {
            setScores(new Array(numPlayers).fill(0));
        }
    }, [numPlayers]);


    function incrementPlayerScore(index) {
        setScores((scores) => {
            const newScores = [...scores];
            const score = ++newScores[index];
            if (score > maxScore) {
                console.log(score);
                setMaxScore(score);
            }
            return newScores;
        })
    }

    function reset() {
        setScores(new Array(numPlayers).fill(0));
        setMaxScore(0);
    }

    return (
        <div className='gameContainer'>
            <div className="card">
                <h1 className="card-header">
                    Score Keeper
                </h1>
                <ul className="list-group list-group-flush">
                    {scores.map((score, i) => {
                        return (
                            <div className="d-flex align-items-center justify-content-around">
                                <li className="list-group-item pr-0" key={i}>Player {i+1}:</li>
                                <span style={{color: score === maxScore ? "#0BDA51" : "black"}}>{score}</span>
                                <button onClick={() => incrementPlayerScore(i)} className='btn btn-lg btn-success' id='button'>+1</button>
                            </div>
                        )
                    })}
                </ul>
                <button onClick={reset} className="btn btn-light btn-lg">Reset</button>
            </div>
        </div>
    )
}