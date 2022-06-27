import "./TodoInput.scss";
import { v4 } from "uuid";
import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");
  const [inputFieldColor, setInputFieldColor] = useState("rgb(4, 126, 85)");

  function inputValueManager(e) {
    setInputValue(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setInputFieldColor("red");
      return;
    } else {
      setInputFieldColor("rgb(4, 126, 85)");
    }

    const newTodo = {
      id: v4(),
      completed: false,
      title: inputValue,
    };
    addTodo(newTodo);
    setInputValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Add items..."
        autoFocus
        type={"text"}
        onChange={inputValueManager}
        style={{ borderColor: inputFieldColor }}
        value={inputValue}
      />
      <button>Add</button>
    </form>
  );
}
