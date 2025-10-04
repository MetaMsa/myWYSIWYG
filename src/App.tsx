import { useState } from "react";
import "./App.css";
import Text from "./Text";

function App() {
  const [count, setCount] = useState(0);

  const buttons = [
    {
      name: "bold",
      text: "kalın",
    },
    {
      name: "italic",
      text: "italik",
    },
    {
      name: "h1",
      text: "h1",
    },
    {
      name: "h2",
      text: "h2",
    },
    {
      name: "h3",
      text: "h3",
    },
  ];

  return (
    <>
      <div className="fixed-top">
        {buttons.map((button, index) => (
          <button key={index} className="btn btn-secondary m-5">{button.text}</button>
        ))}
      </div>
      <Text></Text>
    </>
  );
}

export default App;
