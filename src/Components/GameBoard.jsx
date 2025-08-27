
export default function Gameboard({ selectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button className={`${playerSymbol}-symbol`} onClick={() => selectSquare(rowIndex, colIndex)} disabled={playerSymbol}>
                  {playerSymbol} 
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
