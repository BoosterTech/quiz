import { useEffect } from "react";
import { Wrapper } from "./styled";

function Timer({ dispatch, timeRemaining }) {
  const min = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  useEffect(
    function () {
      const timerId = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(timerId);
    },
    [dispatch]
  );

  return (
    <Wrapper>
      {min < 10 && "0"}
      {min}:{seconds < 10 && "0"}
      {seconds}
    </Wrapper>
  );
}

export default Timer;
