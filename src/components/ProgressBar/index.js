function ProgressBar({
  index,
  numQuestions,
  answer,
  points,
  maxPossiblePoints,
}) {
  return (
    <div>
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>

      <span>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </span>
      <span>
        {" "}
        {points} / {maxPossiblePoints}
      </span>
    </div>
  );
}

export default ProgressBar;
