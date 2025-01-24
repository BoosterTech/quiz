import Options from "../Options";
import { OptionsContainer } from "../Options/styled";

export default function Question({ question, dispatch, answer }) {
  return (
    <>
      <h3>{question.question}</h3>{" "}
      <OptionsContainer>
        <Options question={question} dispatch={dispatch} answer={answer} />
      </OptionsContainer>
    </>
  );
}
