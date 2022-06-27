// import { useState } from "react";
import "./TodoItem.scss";
export default function TodoItem({ todo, deleteTodo, markComplete }) {
  //   const [toggleBtnVisibilty, setToggleBtnVisibilty] = useState("none");
  const { id, completed, title } = todo;
  function del() {
    deleteTodo(id);
  }

  function mark() {
    // markComplete
    //   ? setToggleBtnVisibilty("block")
    //   : setToggleBtnVisibilty("none");
    markComplete(id);
  }

  return (
    <div className="item">
      <div className="checkbox-and-text">
        <input type={"checkbox"} checked={completed} onChange={mark} />
        <span>{title}</span>
      </div>

      {completed && <button onClick={del}>Del</button>}
    </div>
  );
}
