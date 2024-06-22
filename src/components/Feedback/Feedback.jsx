import css from "./Feedback.module.css";

export default function Feedback({
  feedbacks,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.container}>
      <li className={css.feedback}>Good: {feedbacks.good} </li>
      <li className={css.feedback}>Neutral: {feedbacks.neutral} </li>
      <li className={css.feedback}>Bad: {feedbacks.bad} </li>
      <li className={css.feedback}>Total:{totalFeedback} </li>
      <li className={css.feedback}>Positive: {positiveFeedback}% </li>
    </ul>
  );
}
