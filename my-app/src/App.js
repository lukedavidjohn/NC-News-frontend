import React, { Component } from "react";
import { Router } from "@reach/router";

import "./CSS/App.css";
import * as api from "./utils/apiCalls";

import Article from "./components/Article";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Topic from "./components/Topic";
import Topics from "./components/Topics";

class App extends Component {
  state = {
    articles: [],
    topics: []
  };
  render() {
    const { topics, articles } = this.state;
    return (
      <div className="App">
        <Heading />
        <Nav topics={topics} />
        <Router className="Main">
          <Homepage path="/" articles={articles} />
          <Topic path="/:topic" articles={articles} />
          <Topics path="/topics" topics={topics} />
          <Article path="/articles/:article_id" articles={articles} />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount = async () => {
    const { topics } = await api.fetchTopics();
    this.setState({ topics });
    const { articles } = await api.fetchArticles();
    this.setState({ articles });
  };
}

export default App;
