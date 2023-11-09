import { useState } from 'react';
function ScoreKeeper({numPlayers, target}) {
    const [scores, setScore] = useState(new Array(numPlayers).fill(0));
    const incrementScore = (idx) => {
        setScore((prevScore) => {
            const copy = [...prevScore];
            copy[idx] += 1;
            return copy;
        })
    }
    const reset = () => {
        setScore(new Array(numPlayers).fill(0));
    }
    return (
        <div>
            <ul>
                {scores.map((score, idx) => {
                    return (
                        <li key={idx}>
                            Player {idx + 1}: {score}
                            <button onClick={() => incrementScore(idx)}>+1</button>
                            {score >= target && "WINNER!"}
                        </li>
                    )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )




    // const [scores, setScores] = useState({p1Score: 0, p2Score: 0})
    // const increaseP1Score = () => {
    //     setScores((oldScores) => {
    //         return { ...oldScores, p1Score: oldScores.p1Score + 1}
    //     });
    // }
    // const increaseP2Score = () => {
    //     setScores((oldScores) => {
    //         return { ...oldScores, p2Score: oldScores.p2Score + 1}
    //     });
    // }
    // return (
    //     <div>
    //         <p>Player 1: {scores.p1Score}</p>
    //         <p>Player 2: {scores.p2Score}</p>
    //         <button onClick={increaseP1Score}>+1 Player 1</button>
    //         <button onClick={increaseP2Score}>+1 Player 2</button>
    //     </div>
    // )
}

export default ScoreKeeper;