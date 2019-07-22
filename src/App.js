import React, { Component } from "react";
import { Router } from "@reach/router";

import "./CSS/App.css";

import * as api from "./utils/apiCalls";
import * as func from "./utils/functions";

import Article from "./components/Article";
import Error from "./components/Error";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import PostArticle from "./components/PostArticle";
import TopicPage from "./components/TopicPage";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Heading />
        <Nav topics={topics} />
        <Router className="Main">
          <TopicPage path="/" />
          <TopicPage path="topics/:topic" />
          <Article path="/articles/:article_id" />
          <PostArticle path="/post" topics={topics} />
          <Error default path="/Error" />
        </Router>
      </div>
    );
  }

  componentDidMount = async () => {
    await this.getTopics();
  };

  getTopics = async () => {
    const { topics } = await api.fetchTopics();
    this.setState({
      topics: topics.sort(func.compareTopics)
    });
  };

  setTopic = topic => {
    this.setState({ topic });
  };
}

export default App;
