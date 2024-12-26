function Reset({ setHighScore, setShowReset, selectSound, mute }) {
  function cancel() {
    setShowReset(false);
    if (!mute) {
      selectSound.play();
    }
  }

  function reset() {
    setHighScore(0);
    if (localStorage.getItem("highScore")) {
      localStorage.setItem("highScore", 0);
    }
    setShowReset(false);
    if (!mute) {
      selectSound.play();
    }
  }

  return (
    <section id="reset--cont">
      <p>Are you sure?</p>
      <div>
        <span onClick={reset}>Yes</span>
        <span onClick={cancel}>No</span>
      </div>
    </section>
  );
}

export default Reset;
