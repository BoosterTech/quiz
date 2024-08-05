import { Wrapper } from "./styled";
import { Button, H2, H3 } from "./styled";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <Wrapper>
      <H2>Welcome to The React Quiz!</H2>
      <H3>{numQuestions} questions to test your React mastery</H3>
      <Button onClick={() => dispatch({ type: "start" })}>Let's start</Button>
    </Wrapper>
  );
}

export default StartScreen;
