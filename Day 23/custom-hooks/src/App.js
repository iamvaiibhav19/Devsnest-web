import "./App.css";
import useFetch from "./Hooks/useFetch";

import useToggle from "./Hooks/useToggle";

function App() {
  const [isTextChanged, setIsTextChanged] = useToggle();
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  return (
    <div className="App">
      <h1>Custom Hooks: useToggle</h1>
      <h1>{isTextChanged ? "You successfully toggled the button" : ""}</h1>
      <button onClick={setIsTextChanged}>
        {isTextChanged ? "Toggled" : "Click to Toggle"}
      </button>
      <h2>{data.title}</h2>
    </div>
  );
}

export default App;
