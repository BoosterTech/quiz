import Options from "../Options";

export default function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <>
      <h3>{question.question}</h3>{" "}
      <div>
        <Options question={question} dispatch={dispatch} answer={answer} />
      </div>
    </>
  );
}
