import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./router/About";
import Dashboard from "./router/Dashboard";
import Home from "./router/Home";
import Profile from "./router/Profile";
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Dashboard} />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
