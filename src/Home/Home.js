import React from "react";
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
      </div>
      <div className="home__column">
        {/* BlogCreated */}
        {/* BlogCreated */}
        {/* BlogCreated */}
      </div>
    </div>
  );
}

export default Home;
