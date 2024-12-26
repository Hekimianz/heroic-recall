function TransitionLevel({ level, setLevel, setTransition }) {
  return (
    <section id="transitionLevel--cont">
      <p>{`Level ${level} completed!`}</p>
      <button
        id="nextLevel-btn"
        onClick={() => {
          setLevel((prev) => prev + 1);
          setTransition(false);
        }}
      >
        Next Level
      </button>
    </section>
  );
}
export default TransitionLevel;
