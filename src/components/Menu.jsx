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
  mute,
  selectSound,
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
            if (!mute) {
              selectSound.play();
            }
          }}
        >
          Play
        </li>
        <li
          onClick={() => {
            setShowInstructions(true);
            setShowMenu(false);
            if (!mute) {
              selectSound.play();
            }
          }}
        >
          How to Play
        </li>
        <li
          onClick={() => {
            setShowReset(true);
            if (!mute) {
              selectSound.play();
            }
          }}
        >
          Reset Score
        </li>
      </ul>
      {showReset ? (
        <Reset
          setHighScore={setHighScore}
          setShowReset={setShowReset}
          selectSound={selectSound}
          mute={mute}
        />
      ) : null}
      <span id="highScore">High Score: {highScore}</span>
    </section>
  );
}

export default Menu;
