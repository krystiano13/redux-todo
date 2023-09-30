import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./reducers/todoSlice";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="width-100 height-100 bg p-2">
      <h1 className="color font-head f-600 f-xxl m-1">Redux TO-DO App</h1>
      <form
        className="m-1 mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(add(e.target[0].value));
        }}
      >
        <input
          className="p-1 font-other outline-none border-none bg color
          border-bottom-solid border-bottom-2 border-bottom-primary"
          placeholder="name your task"
          type="text"
          min={1}
        />
        <button
          className="p-1 pl-3 pr-3 c-pointer font-head
          border-none bg-accent border-bottom-solid border-bottom-2 border-bottom-primary"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul className="m-1 mt-6">
        {todos.map((item) => (
          <li className="font-other color f-300 width-25 flex jc-between m-1" key={item.id}>
            {item.name}{" "}
            <button
              className="ml-1 p-1 pr-3 pl-3 font-head c-pointer 
              border-none bg-accent border-bottom-solid border-bottom-2 border-bottom-primary"
              onClick={() => dispatch(remove(item.id))}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { App };
