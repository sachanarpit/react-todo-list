export const ListMain = ({ list, setList, condition }) => {
  return (
    <div>
      {condition === true ? <h2>Completed</h2> : <h2>Not Completed</h2>}

      {list
        .filter((item) => item.status === condition)
        .map((person) => (
          <div>
            {condition === true ? <del>{person.todo}</del> : <>{person.todo}</>}
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
              {person.status === true ? "❌" : "✔️"}
            </button>
          </div>
        ))}
    </div>
  );
};
