function Reset({ setHighScore, setShowReset }) {
  function cancel() {
    setShowReset(false);
  }

  function reset() {
    setHighScore(0);
    if (localStorage.getItem("highScore")) {
      localStorage.setItem("highScore", 0);
    }
    setShowReset(false);
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
