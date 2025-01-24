import { Button } from "./styled";

function NextButton({ answer, dispatch, numQuestions, index }) {
  if (answer == null) return;
  if (index < numQuestions - 1)
    return (
      <Button onClick={() => dispatch({ type: "nextQuestion" })}>Next</Button>
    );
  if (index === numQuestions - 1)
    return (
      <Button onClick={() => dispatch({ type: "finished" })}>Finish</Button>
    );
}

export default NextButton;
