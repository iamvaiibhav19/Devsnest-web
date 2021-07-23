import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/AuthContext";

function About() {
  const logger = useContext(Context);
  return (
    <div className="about">
      <Route>
        <h1>About</h1>
        <div className="about-p">
          {logger.loggedIn ? "Welcome to About section" : <Redirect to="/" />}
        </div>
      </Route>
    </div>
  );
}

export default About;
