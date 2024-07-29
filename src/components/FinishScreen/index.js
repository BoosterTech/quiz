function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji = "";
  if (percentage === 100) emoji = "🎖️";
  return (
    <p>
      You scored <strong>{points}</strong> points out of {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
