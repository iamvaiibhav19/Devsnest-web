import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/AuthContext";

function Profile() {
  const logger = useContext(Context);
  return (
    <div className="profile">
      <Route>
        <h1>Profile</h1>
        <div className="profile-p">
          {logger.loggedIn ? "Welcome to your Profile" : <Redirect to="/" />}
        </div>
      </Route>
    </div>
  );
}

export default Profile;
