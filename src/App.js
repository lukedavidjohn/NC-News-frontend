import React, { Component } from "react";
import { Router } from "@reach/router";

import "./CSS/App.css";

import Article from "./components/Article";
import Error from "./Error";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
// import Topics from "./components/Topics";
import TopicPage from "./components/TopicPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Router className="Main">
          <TopicPage path="/" />
          <TopicPage path="/:topic" />
          {/* <Topics path="/topics" topics={topics} setTopic={this.setTopic} /> */}
          <Article path="/articles/:article_id" />
          {/* <PostArticle path='/newarticle' /> */}
          <Error path="/Error" />
        </Router>
      </div>
    );
  }
}

export default App;
