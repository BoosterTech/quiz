import { useState } from "react";
import { Option } from "./styled";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    dispatch({ type: "newAnswer", payload: index });
    setClicked(index);
  };

  return (
    <>
      {question.options.map((option, index) => (
        <Option
          key={option}
          onClick={() => handleClick(index)}
          disabled={hasAnswered}
          greenBackground={
            index === question.correctOption && hasAnswered ? true : false
          }
          redBackground={
            hasAnswered && index !== question.correctOption && clicked === index
              ? true
              : false
          }
          answered={hasAnswered}
        >
          {option}
        </Option>
      ))}
    </>
  );
}

export default Options;
