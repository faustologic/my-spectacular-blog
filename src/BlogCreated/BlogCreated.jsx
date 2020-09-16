import React from "react";

class BlogCreated extends Component {
  state = {
    title: "",
    description: "",
  };
  render() {
    return (
      <div className="blogCreated">
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default BlogCreated;
