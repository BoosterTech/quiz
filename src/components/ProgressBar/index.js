import { Info, Progress, Wrapper } from "./styled";

function ProgressBar({
  index,
  numQuestions,
  answer,
  points,
  maxPossiblePoints,
}) {
  return (
    <Wrapper>
      <Progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></Progress>
      <Info>
        <span>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </span>
        <span>
          {" "}
          {points} / {maxPossiblePoints}
        </span>
      </Info>
    </Wrapper>
  );
}

export default ProgressBar;
