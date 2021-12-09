import { nanoid } from "nanoid";
import { useState } from "react";
import { ListMain } from "./TodoList";

export const Todo = () => {
  const [list, setList] = useState([]);

  const [todo, setTodo] = useState("");
  let handleTodo = (e) => {
    setTodo(e.target.value);
  };
  let handleList = () => {
    console.log(list);
    let newTodo = {
      id: nanoid(),
      todo: todo,
      status: false,
    };
    setList([...list, newTodo]);
    setTodo("");
  };

  return (
    <div>
      <div>
        <input type="text" name="" id="" value={todo} onChange={handleTodo} />
        <button onClick={handleList}>
          {" "}
          <span>➕</span>{" "}
        </button>
      </div>
      <ListMain list={list} setList={setList} condition={false}></ListMain>
      <ListMain list={list} setList={setList} condition={true}></ListMain>
    </div>
  );
};
