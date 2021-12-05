import { useState } from "react";
export const Todo = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  let handleTodo = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <div>
        <input type="text" name="" id="" value={todo} onChange={handleTodo} />
        <button>
          {" "}
          <span>➕</span>{" "}
        </button>
      </div>
    </div>
  );
};
