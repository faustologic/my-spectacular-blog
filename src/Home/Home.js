import React from "react";
import BlogCreated from "../BlogCreated/BlogCreated";
import Header from "../Header/Header";
import NewBlogPost from "../NewBlogPost/NewBlogPost";
import "./Home.css";

function Home() {
  return (
    <div home>
      <div className="home__header">
        <Header />
      </div>
      <div className="home__container">
        <NewBlogPost />
        {/* <BlogCreated /> */}
      </div>
    </div>
  );
}

export default Home;
