import { useState } from "react";
import Reset from "./Reset";
import "../css/menu.css";
import logo from "../assets/logo.png";
function Menu({
  highScore,
  setHighScore,
  setShowInstructions,
  setShowMenu,
  setGameStarted,
  setLevel,
}) {
  const [showReset, setShowReset] = useState(false);
  return (
    <section className="main--conts" id="menu--cont">
      <img src={logo} id="logo" />
      <h1 id="title">Heroic Recall</h1>
      <ul id="menu--cont">
        <li
          onClick={() => {
            setGameStarted(true);
            setShowMenu(false);
            setLevel(1);
          }}
        >
          Play
        </li>
        <li
          onClick={() => {
            setShowInstructions(true);
            setShowMenu(false);
          }}
        >
          How to Play
        </li>
        <li
          onClick={() => {
            setShowReset(true);
          }}
        >
          Reset Score
        </li>
      </ul>
      {showReset ? (
        <Reset setHighScore={setHighScore} setShowReset={setShowReset} />
      ) : null}
      <span id="highScore">High Score: {highScore}</span>
    </section>
  );
}

export default Menu;
