import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div className="App">
      <TodoAdd />
      <TodosList />
    </div>
  );
}

export default App;
