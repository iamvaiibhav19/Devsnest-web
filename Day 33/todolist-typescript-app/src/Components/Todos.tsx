import React from "react";
import { Itodo } from "./Todolists";

interface Todo {
  todo: Itodo;
}
const Todos = ({ todo }: Todo) => {
  return (
    <div className="card">
      <p>{todo.name}</p>
    </div>
  );
};

export default Todos;
