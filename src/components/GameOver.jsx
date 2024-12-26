import "../css/gameOver.css";
function GameOver({
  setShowMenu,
  setGameStarted,
  setGameOver,
  setLevel,
  level,
  highScore,
}) {
  return (
    <section className="main--conts">
      <span id="highScore">High Score: {highScore}</span>
      <h2 id="game--over-title">Game Over!</h2>
      <p id="game--over-text">{`You made it to level ${level}.`}</p>
      <div id="game--over-btns-cont">
        <button
          className="game--over-btn"
          onClick={() => {
            setGameOver(false);
            setGameStarted(true);
            setLevel(1);
          }}
        >
          Play again
        </button>
        <button
          className="game--over-btn"
          onClick={() => {
            setGameOver(false);
            setShowMenu(true);
          }}
        >
          Menu
        </button>
      </div>
    </section>
  );
}

export default GameOver;
