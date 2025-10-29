 import { WINER_COMBOS } from "../constants";
 
 export const checkWinner = (boardToCheck) => {
    for (const combo of WINER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }

    return false;
  };

  export const checkEndGame = (newBoard) => {
    // si no hay ninguna casilla vacia, no hay ganador
    return newBoard.every((square) => square !== null);
  };