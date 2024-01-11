import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_SUMAN);

  return (
    <>
      <h1>A blog with App write</h1>
    </>
  );
}

export default App;
