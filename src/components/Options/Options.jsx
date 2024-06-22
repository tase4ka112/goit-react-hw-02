import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  const handleClick = (event) => {
    updateFeedback(event.target.name);
  };

  const renderResetBtn = !!totalFeedback && (
    <button type="button" className={css.button} onClick={resetFeedback}>
      Reset
    </button>
  );

  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={handleClick}
        name="good"
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        onClick={handleClick}
        name="neutral"
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        onClick={handleClick}
        name="bad"
      >
        Bad
      </button>
      {renderResetBtn}
    </div>
  );
}
