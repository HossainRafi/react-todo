import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggoleComplete }) => {
  return (
    <div>
      <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
          <input
            onChange={() => toggoleComplete(todo)}
            type="checkbox"
            checked={todo.completed ? "checked" : ""}
          />
          <p
            onClick={() => toggoleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        </div>
        <button>{<FaRegTrashAlt />}</button>
      </li>
    </div>
  );
};

export default Todo;
