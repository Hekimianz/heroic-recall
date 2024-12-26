import { useState } from "react";
import Menu from "./components/Menu";
import Level from "./components/Level";
import HowToPlay from "./components/HowToPlay";
import GameOver from "./components/GameOver";
import TransitionLevel from "./components/TransitionLevel";
import musicOn from "./assets/musicOn.png";
import musicOff from "./assets/musicOff.png";
import select from "./assets/select.mp3";
import lose from "./assets/lose.mp3";
import win from "./assets/win.mp3";
function App() {
  const [level, setLevel] = useState(0);
  const [highScore, setHighScore] = useState(
    +localStorage.getItem("highScore") || 0
  );
  const [showMenu, setShowMenu] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [transition, setTransition] = useState(false);
  const [mute, setMute] = useState(false);
  const selectSound = new Audio(select);
  const loseSound = new Audio(lose);
  const winSound = new Audio(win);

  return (
    <>
      <button id="mute--btn">
        <img
          src={mute ? musicOff : musicOn}
          alt={mute ? "mute" : "unmute"}
          onClick={() => {
            setMute((prev) => !prev);
          }}
        />
      </button>
      {showMenu && (
        <Menu
          highScore={highScore}
          setHighScore={setHighScore}
          setShowInstructions={setShowInstructions}
          setShowMenu={setShowMenu}
          setGameStarted={setGameStarted}
          setLevel={setLevel}
          mute={mute}
          selectSound={selectSound}
        />
      )}
      {showInstructions && (
        <HowToPlay
          setShowInstructions={setShowInstructions}
          setShowMenu={setShowMenu}
          mute={mute}
          selectSound={selectSound}
        />
      )}
      {gameStarted && (
        <Level
          level={level}
          setLevel={setLevel}
          highScore={highScore}
          setHighScore={setHighScore}
          setGameOver={setGameOver}
          setGameStarted={setGameStarted}
          setTransition={setTransition}
          mute={mute}
          selectSound={selectSound}
          winSound={winSound}
          loseSound={loseSound}
        />
      )}
      {transition && (
        <TransitionLevel
          level={level}
          setLevel={setLevel}
          setTransition={setTransition}
          mute={mute}
          selectSound={selectSound}
        />
      )}
      {gameOver && (
        <GameOver
          setGameStarted={setGameStarted}
          setGameOver={setGameOver}
          setLevel={setLevel}
          setShowMenu={setShowMenu}
          level={level}
          highScore={highScore}
          mute={mute}
          selectSound={selectSound}
        />
      )}
    </>
  );
}

export default App;
