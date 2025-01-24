import { Button } from "../StartScreen/styled";
import { RestartContainer, ScoreWrapper } from "./styled";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji = "";
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😀";
  if (percentage >= 0 && percentage < 50) emoji = "😊";
  if (percentage === 0) emoji = "😒";

  return (
    <>
      <ScoreWrapper>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </ScoreWrapper>
      <p>(Highscore: {highscore} points)</p>
      <RestartContainer>
      <Button onClick={() => dispatch({ type: "restart" })}>Restart quiz</Button>
      </RestartContainer>
    </>
  );
}

export default FinishScreen;
