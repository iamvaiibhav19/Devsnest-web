import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { User } from "./actions";
import updateUser from "./actions";
import Landing from "./Components/Landing";

export interface postType {
  username: string;
  post: string;
}

function App() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<postType[]>([]);

  useEffect(() => {
    dispatch(updateUser());
    fetch("/data/post.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Landing posts={posts} />
    </>
  );
}

export default App;
