import { useEffect, useState } from "react";

const API_post = () => {
  const [post] = useState([]);

  const fetch_api = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await response.json(); // const posts_text = response.text();
    setPost(post);
  };

  useEffect(() => {
    //fetch api
    fetch_api();
  }, []);

  return posts.map((item, index) => <h1 key={index}>{item.title}</h1>);
};

export default API_post;
