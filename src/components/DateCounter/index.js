import { useState } from "react";

function DateCounter() {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + inputValue);

  function handleInputChange(e) {
    setInputValue(Number(e.target.value));
  }

  function handleRangeChange(e) {
    setCount(Number(e.target.value));
  }

  return (
    <div>
      <input type="range" min="1" max="10" onChange={handleRangeChange}></input>
      <p>{count}</p>
      <button onClick={() => setInputValue(inputValue + count)}>+</button>

      <input
        value={inputValue}
        type="number"
        onChange={handleInputChange}
      ></input>
      <button onClick={() => setInputValue(inputValue - count)}>-</button>
      <p>
        {date.toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
      <button onClick={() => setInputValue(0)}>Reset</button>
    </div>
  );
}

export default DateCounter;
