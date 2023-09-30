import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Redux TO-DO App</h1>
            <ul>
                {
                    todos.map(item => (
                        <p>{ item.name }</p>
                    ))
                }
            </ul>
        </div>
    )
}

export { App };