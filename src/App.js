import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./reducers/todoSlice";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux TO-DO App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(add(e.target[0].value));
        }}
      >
        <input placeholder="name your task" type="text" min={1} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <p key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch(remove(item.id))}>Done</button>
          </p>
        ))}
      </ul>
    </div>
  );
};

export { App };
