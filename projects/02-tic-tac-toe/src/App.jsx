import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleCLick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleCLick} className={className}>
      {children}
    </div>
  );
};

const WINER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {

    for (const combo of WINER_COMBOS) {
      const [a, b, c] = combo;
      if (
          boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]) {

            return true
        
      }
    }

    return false;

  }

  const updateBoard = (index) => {

    // si ya tiene algo no actualizar
    if(board[index] !== null) return;

    // actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // revisar si hay ganador
    const isWinner = checkWinner(newBoard);
    if(isWinner){
      setWinner(turn);
      return;
    }
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    
  };

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            > {board[index]} </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {/* mostrar el ganador */}
      {winner ? (
        <span className="winner">The winner is {winner}</span>
      ) : null} 
    </main>
  );
}
export default App;
