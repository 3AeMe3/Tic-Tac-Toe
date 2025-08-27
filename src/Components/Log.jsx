export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <p key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} Selected {turn.square.row},{turn.square.col}
        </p>
      ))}
    </ol>
  );
}
