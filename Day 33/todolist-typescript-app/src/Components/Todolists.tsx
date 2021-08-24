import React, { useState } from "react";
import Todos from "./Todos";

export interface Itodo {
  name: string;
}

const Todolists = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Itodo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  let handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setTodos([...todos, { name: input }]);
      setLoading(false);
      setInput("");
    }, 2000);
  };

  return (
    <section className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Todo - List</h1>
        <div className="forms">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={handleClick}>Add</button>
        </div>
        {loading ? <p>Loading..</p> : null}
        <section>
          {todos.map((todo, id) => (
            <Todos key={id} todo={todo} />
          ))}
        </section>
      </form>
    </section>
  );
};

export default Todolists;
