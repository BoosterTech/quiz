import { useEffect } from "react";
import Header from "./components/Header/index";
import Main from "./components/Main";

function App() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((arr) => console.error("Error"));
  });

  return (
    <>
      <Header />
      <Main>
        <p>1/15</p>
        <p>question</p>
      </Main>
    </>
  );
}

export default App;
