import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { H1 } from "./components/Typography";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <H1>Hello World!</H1>
    </>
  );
}

export default App;
