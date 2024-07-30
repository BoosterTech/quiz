import { useEffect } from "react";

function Timer({ dispatch, timeRemaining }) {
  useEffect(
    function () {
      const timerId = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(timerId);
    },
    [dispatch]
  );

  return <div>{timeRemaining}</div>;
}

export default Timer;
