import { useState } from "react";
import Menu from "./components/Menu";
import Level from "./components/Level";
import HowToPlay from "./components/HowToPlay";
import GameOver from "./components/GameOver";
import TransitionLevel from "./components/TransitionLevel";
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
  return (
    <>
      {showMenu && (
        <Menu
          highScore={highScore}
          setHighScore={setHighScore}
          setShowInstructions={setShowInstructions}
          setShowMenu={setShowMenu}
          setGameStarted={setGameStarted}
          setLevel={setLevel}
        />
      )}
      {showInstructions && (
        <HowToPlay
          setShowInstructions={setShowInstructions}
          setShowMenu={setShowMenu}
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
        />
      )}
      {transition && (
        <TransitionLevel
          level={level}
          setLevel={setLevel}
          setTransition={setTransition}
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
        />
      )}
    </>
  );
}

export default App;
