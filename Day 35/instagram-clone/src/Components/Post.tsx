import React, { useState } from "react";
import { postType } from "../App";

const Post = ({ post }: { post: postType }) => {
  const [isliked, setIsliked] = useState(false);
  return (
    <div className="card post">
      <div className="card-header">
        <h5 className="card-title">{post.username}</h5>
        <i className="bi bi-three-dots"></i>
      </div>
      <img src={post.post} className="card-img-top" alt="..." />
      <div className="buttons">
        <i
          className={isliked ? "bi bi-heart-fill linked" : "bi bi-heart"}
          onClick={() => {
            setIsliked(!isliked);
          }}
        ></i>
        <i className="bi bi-chat"></i>
        <i className="bi bi-share"></i>
      </div>
    </div>
  );
};

export default Post;
