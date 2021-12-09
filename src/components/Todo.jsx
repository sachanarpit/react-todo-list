import { nanoid } from "nanoid";
import { useState } from "react";
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

  let handleStatus = (idd) => {
    let updatedTodo = list.map((item) => {
      if (item.id === idd) {
        item.status = !item.status;
      }
      return item;
    });
    setList(updatedTodo);
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

      {/* <div>
        {list.map((e) => (
          <div key={e.id}>
            <p>{e.todo}</p>
            <button
              onClick={() => {
                let updatedTodo = list.map((item) => {
                  if (item.id === e.id) {
                    item.status = !item.status;
                  }
                  return item;
                });
                setList(updatedTodo);
              }}
            >
              {e.status === true ? "completed" : "not-completed"}
            </button>
          </div>
        ))}
      </div> */}

      {/* not competed */}
      <div>
        <h2>Not Completed</h2>
        {list
          .filter((item) => item.status === false)
          .map((person) => (
            <div>
              {person.todo}
              {"   "}
              <button
                onClick={() => {
                  let updatedTodo = list.map((item) => {
                    if (item.id === person.id) {
                      item.status = !item.status;
                    }
                    return item;
                  });
                  setList(updatedTodo);
                }}
              >
                {person.status === true ? "completed" : "not-completed"}
              </button>
            </div>
          ))}
      </div>

      {/* complted */}

      <div>
        <h2>Completed</h2>
        {list
          .filter((item) => item.status === true)
          .map((person) => (
            <div>
              <del>{person.todo}</del> {"   "}
              <button
                onClick={() => {
                  let updatedTodo = list.map((item) => {
                    if (item.id === person.id) {
                      item.status = !item.status;
                    }
                    return item;
                  });
                  setList(updatedTodo);
                }}
              >
                {person.status === true ? "completed" : "not-completed"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
