import { useState } from "react";
import "./App.css";
import Text from "./Text.tsx";

function App() {
  const [clickedButton, setClickedButton] = useState("");
  const [content, setContent] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quibusdam veritatis nobis beatae quas officiis, nemo explicabo et, architecto quos sint! Voluptate magni exercitationem dolores ipsum pariatur molestiae dolore ex!");

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
  const handleText = () =>
  {
    const selected = window.getSelection();
    const selectedText = selected?.toString();
    const newText = content.replace(selectedText!, `<${clickedButton}>${selectedText}</${clickedButton}>`);
    setContent(newText);
    selected?.deleteFromDocument();
  }

  return (
    <>
      <div className="fixed-top">
        {buttons.map((button, index) => (
          <button onClick={() => {
            setClickedButton(button.name)!;
            handleText()
          }} key={index} className="btn btn-secondary m-5">{button.text}</button>
        ))}
      </div>
      <Text content={content}></Text>
    </>
  );
}

export default App;
