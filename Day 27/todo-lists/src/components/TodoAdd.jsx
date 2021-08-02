import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddItem } from "../actions/actions";

const TodoAdd = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="todo-inputs">
      <h1>Todo-List</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a To-do"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              AddItem({
                title: item,
                done: false,
              })
            );
            setItem("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoAdd;
