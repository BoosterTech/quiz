function NextButton({ answer, dispatch }) {
  if (answer == null) return;
  return (
    <button onClick={() => dispatch({ type: "nextQuestion" })}>next</button>
  );
}

export default NextButton;
