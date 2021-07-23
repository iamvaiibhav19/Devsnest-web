import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/AuthContext";

function Dashboard() {
  const logger = useContext(Context);
  return (
    <div className="dashboard">
      <Route>
        <h1>Dashboard</h1>
        <div className="dashboard-p">
          {logger.loggedIn ? "Welcome to Dashboard" : <Redirect to="/" />}
        </div>
      </Route>
    </div>
  );
}

export default Dashboard;
