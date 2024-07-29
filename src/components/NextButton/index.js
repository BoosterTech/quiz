function NextButton({ answer, dispatch, numQuestions, index }) {
  if (answer == null) return;
  if (index < numQuestions - 1)
    return (
      <button onClick={() => dispatch({ type: "nextQuestion" })}>next</button>
    );
  if (index === numQuestions - 1)
    return (
      <button onClick={() => dispatch({ type: "finished" })}>Finish</button>
    );
}

export default NextButton;
