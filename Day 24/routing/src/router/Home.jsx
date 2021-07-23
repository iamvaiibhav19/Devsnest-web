import React, { useContext, useState } from "react";
import Context from "../context/AuthContext";

function Home(props) {
  //   const [loggedIn, setLoggedIn] = useState(false);
  const logger = useContext(Context);
  const toggleLogin = () => {
    logger.toggleLogin();
    // console.log("Hello");
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Cannot access navbar until you login, Please Login!!</p>
      {logger.loading ? (
        <button>Loading..</button>
      ) : logger.loggedIn ? (
        <button onClick={logger.logout}>Logout</button>
      ) : (
        <button onClick={logger.login}>Login</button>
      )}
    </div>
  );
}

export default Home;
