import { useState } from "react";
import Menu from "./components/Menu";
import Level from "./components/Level";
function App() {
  const [level, setLevel] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      {level === 0 ? (
        <Menu highScore={highScore} setHighScore={setHighScore} />
      ) : (
        <Level level={level} setLevel={setLevel} />
      )}
    </>
  );
}

export default App;
