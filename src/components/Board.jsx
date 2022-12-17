import React, { useState } from 'react';
import Square from "./Square";

const Board = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXturn, setTurn] = useState(true);

    const handleSquareClick = (position) => {
        if (board[position])
            return;

        const state = [...board];
        state[position] = isXturn ? 'X':'O';
        setBoard(state);
        setTurn(!isXturn);
    };

    const renderSquare = (position) => {
        return (
            <Square value={board[position]} squareClick={() => handleSquareClick(position)}/>
        );
    };

    return (
        <div className="board">

            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}

            </div>

        </div>
    );
};

export default Board;