function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <>
      {question.options.map((option, index) => (
        <button
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default Options;
