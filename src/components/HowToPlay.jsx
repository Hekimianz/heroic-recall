import "../css/howToPlay.css";
function HowToPlay({ setShowInstructions, setShowMenu, selectSound, mute }) {
  return (
    <section className="main--conts">
      <h1 id="instruction--h1">How to Play</h1>
      <div id="instructions--main">
        <div className="instruction--cont">
          <h2 className="instruction--title">Start the Game</h2>
          <p className="instruction--text">
            When the game begins, a grid of superhero images will appear on the
            screen. Each hero is unique, but they’ll shuffle every time you
            interact with them.
          </p>
        </div>

        <div className="instruction--cont">
          <h2 className="instruction--title">Click a Hero</h2>
          <p className="instruction--text">
            Choose any superhero from the grid and click on them. Once selected,
            the grid will shuffle, and the heroes will switch places.
          </p>
        </div>

        <div className="instruction--cont">
          <h2 className="instruction--title">Avoid Repeats</h2>
          <p className="instruction--text">
            The goal is to keep clicking on heroes you haven’t clicked before.
            If you accidentally select the same hero twice, the game is over!
          </p>
        </div>

        <div className="instruction--cont">
          <h2 className="instruction--title">Test Your Memory</h2>
          <p className="instruction--text">
            As the game progresses, the challenge grows. Keep track of which
            heroes you’ve already clicked and aim for the highest score
            possible!
          </p>
        </div>

        <div className="instruction--cont">
          <h2 className="instruction--title">Challenge Your Friends</h2>
          <p className="instruction--text">
            Compare scores and see who has the sharpest memory. Can you become
            the ultimate superhero memory master?
          </p>
        </div>
        <span
          onClick={() => {
            setShowMenu(true);
            setShowInstructions(false);
            if (!mute) {
              selectSound.play();
            }
          }}
        >
          Back to the menu
        </span>
      </div>
    </section>
  );
}

export default HowToPlay;
