export default function GameOver({ winner , onRestart }) {
  return (
    <div id="game-over">
      <h2>Fin del Juego!</h2>
      {winner && <p>{winner} Ganaste!</p>}
      {!winner && <p>{winner} Es un Empate!</p>}

      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
