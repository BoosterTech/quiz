function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji = "";
  if (percentage === 100) emoji = "🎖️";

  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😀";

  if (percentage >= 0 && percentage < 50) emoji = "😊";
  if (percentage === 0) emoji = "😒";

  if (percentage)
    return (
      <p>
        <span>{emoji}</span> You scored <strong>{points}</strong> points out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
    );
}

export default FinishScreen;
