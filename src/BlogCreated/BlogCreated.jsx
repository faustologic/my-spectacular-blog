import React from "react";
import "./BlogCreated.css";

const blogInfo = {
  title: "",
  description: "",
  date: "",
  author: {
    name: "",
    avatarURL: "",
  },
};

function BlogCreated(props) {
  return (
    <div className="blogCreated">
      <div className="blogCreated__title">
        <h3>{this.props.title}</h3>
      </div>
      <div className="blogCreated__description">
        <p>{this.props.description}</p>
      </div>
    </div>
  );
}

export default BlogCreated;
