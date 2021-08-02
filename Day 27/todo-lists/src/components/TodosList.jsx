import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteItem } from "../actions/actions";
import { checkItem } from "../actions/actions";

const TodosList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  function message() {
    setCheck(!check);
    if (!check) alert("Have you completed the task??");
  }
  return (
    <div class="todo-display">
      {todos.map((todo, index) => (
        <div class="todo-list-items">
          <h3 style={{ display: "inline-block" }}>{todo.title}</h3>

          <div className="todo-button">
            <button className="edit-btn">Edit</button>
            <button
              className="delete-btn"
              onClick={() => {
                dispatch(deleteItem(index));
              }}
            >
              Delete
            </button>

            <input
              className="Lcheckbox"
              type="checkbox"
              name="checkbox"
              checked={check}
              id="1"
              // onChange={message}
              onChange={() => {
                dispatch(checkItem(index));
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
