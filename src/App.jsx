import { useState } from "react";
import Menu from "./components/Menu";
import Level from "./components/Level";
import HowToPlay from "./components/HowToPlay";
function App() {
  const [level, setLevel] = useState(0);
  const [highScore, setHighScore] = useState(
    +localStorage.getItem("highScore") || 0
  );
  const [showMenu, setShowMenu] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <>
      {showMenu ? (
        <Menu
          highScore={highScore}
          setHighScore={setHighScore}
          setShowInstructions={setShowInstructions}
          setShowMenu={setShowMenu}
        />
      ) : null}
      {showInstructions ? (
        <HowToPlay
          setShowInstructions={setShowInstructions}
          setShowMenu={setShowMenu}
        />
      ) : null}
      {gameStarted ? <Level level={level} setLevel={setLevel} /> : null}
    </>
  );
}

export default App;
