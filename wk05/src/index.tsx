import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
  isWinningSquare: boolean;
};

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
};

type WinnerInfo = {
  winner: string;
  line: number[];
} | null;

// Square Component
const Square: React.FC<SquareProps> = ({ value, onSquareClick, isWinningSquare }) => (
  <button
    className={`square ${isWinningSquare ? 'winning-square' : ''}`}
    onClick={onSquareClick}
  >
    {value}
  </button>
);

// Board Component
const Board: React.FC<BoardProps> = React.memo(({ xIsNext, squares, onPlay }) => {
  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo?.winner || null;
  const winningSquares = winnerInfo?.line || [];
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = useCallback(
    (i: number) => {
      if (winner || squares[i]) return;

      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? 'X' : 'O';
      onPlay(nextSquares);
    },
    [winner, squares, xIsNext, onPlay]
  );

  const renderSquare = (i: number) => (
    <Square
      key={i}
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
      isWinningSquare={winningSquares.includes(i)}
    />
  );

  return (
    <>
      <div className="status">{status}</div>
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
    </>
  );
});

// Main Game Component
const Game: React.FC = () => {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = useCallback(
    (nextSquares: (string | null)[]) => {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    },
    [history, currentMove]
  );

  const jumpTo = useCallback((nextMove: number) => {
    setCurrentMove(nextMove);
  }, []);

  const moves = history.map((_, move) => {
    const description = move
      ? `Go to move #${move}`
      : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

const calculateWinner = (squares: (string | null)[]): WinnerInfo => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
};

export default Game;

root.render(
  <React.StrictMode>
    <div className="app">
      <h1 className="text-center text-2xl font-bold my-4">Tic-Tac-Toe</h1>
      <h3>65070159 - พีรณัฐ หมัดสอ</h3>
      <Game />
    </div>
  </React.StrictMode>
);
