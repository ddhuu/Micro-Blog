import React, { useDebugValue, useState } from "react";

import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <form className="form-group" onSubmit={onSubmit}>
      <div className="form-group">
        <label> New Comment</label>
        <input
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.tartget.value)}
        />
      </div>
    </form>
  );
};

export default CommentCreate;
