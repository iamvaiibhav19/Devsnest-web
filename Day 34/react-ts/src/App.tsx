// import { IncCounter, DecCounter } from "./actions";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "./reducers";
import { useState } from "react";
import { addNote, deleteNote } from "./actions";

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleInput} />
        <button
          onClick={() => {
            dispatch(addNote(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div className="notes">
        {notes.length === 0 ? (
          <h2>No Notes Yet. Add your notes to display!</h2>
        ) : (
          <ul>
            {notes.map((note: string, index: number) => (
              <li key={index}>
                <h3>{note}</h3>
                <button
                  onClick={() => {
                    dispatch(deleteNote(index));
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

/*<button
        onClick={() => {
          dispatch(IncCounter(2));
        }}
      >
        +
      </button>
      <div>{counter}</div>
      <button
        onClick={() => {
          dispatch(DecCounter(2));
        }}
      >
        -
      </button>*/
