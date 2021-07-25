import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FormInputs from "./components/FormInputs";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormInputs />
      </div>
    </Provider>
  );
}

export default App;
