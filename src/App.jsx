import React, { useState } from "react";
import Board from "./components/Board";
import "./styles/root.css"
import calculateWinner from "./helper";

const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXturn, setTurn] = useState(true);

    const winner = calculateWinner(board);

    const message = winner ? `Winner is ${winner}` : `Next Player is ${isXturn ? 'X':'O'}`;

    const handleSquareClick = (position) => {
        if (board[position] || winner)
            return;

        const state = [...board];
        state[position] = isXturn ? 'X':'O';
        setBoard(state);
        setTurn(!isXturn);
    };

    return (
        <div className="app">
            <h1>Tic Tac Toe Game</h1>
            <h2>{message}</h2>
            <Board board={board} handleSquareClick={handleSquareClick}/>
        </div>
    );
};

export default App;