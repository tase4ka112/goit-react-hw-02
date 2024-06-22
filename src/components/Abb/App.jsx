import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = JSON.parse(window.localStorage.getItem("feedbacks"));

    if (savedFeedbacks !== null) {
      return savedFeedbacks;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.bad + feedbacks.good + feedbacks.neutral;

  const positiveFeedback = totalFeedback
    ? Math.round((feedbacks.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
