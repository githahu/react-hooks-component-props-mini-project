import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
import About from "./About"
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blog = {blogData.name}/>
      <About image ={blogData.image} about = {blogData.about}/>
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;
