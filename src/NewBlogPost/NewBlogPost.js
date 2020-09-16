import React from "react";
import "./NewBlogPost.css";

function NewBlogPost() {
  return (
    <div className="newBlogPost">
      <div className="newBlogPost__left">
        <h3>New Blog Post</h3>
        <form>
          <input
            className="newBlogPost__title"
            type="text"
            placeholder="My post title"
          />
          <input
            className="newBlogPost__message"
            type="text"
            placeholder="Message"
          />
          <input
            className="newBlogPost__email"
            type="email"
            placeholder="E-mail"
          />
          <input className="newBlogPost__attachImage" type="image" alt="" />
        </form>
      </div>
      <div className="newBlogPost__right">
        <button className="newBlogPost__savePostButton">Save Post</button>
      </div>
    </div>
  );
}

export default NewBlogPost;
