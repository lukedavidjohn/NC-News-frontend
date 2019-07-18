import React, { Component } from "react";
import { Router } from "@reach/router";

import "./CSS/App.css";
import * as api from "./utils/apiCalls";

import Article from "./components/Article";
// import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Topic from "./components/Topic";
import Topics from "./components/Topics";

class App extends Component {
  state = {
    articles: [],
    order: "DESC",
    topics: [],
    topic: "",
    sort_by: ""
  };
  render() {
    const { topics, articles, isLoading } = this.state;
    return (
      <div className="App">
        <Heading />
        <Nav topics={topics} setTopic={this.setTopic} />
        <Router className="Main">
          <Homepage
            path="/"
            articles={articles}
            setOrder={this.setOrder}
            setSortBy={this.setSortBy}
            setTopic={this.setTopic}
          />
          <Topic
            path="/:topic"
            articles={articles}
            isLoading={isLoading}
            setOrder={this.setOrder}
            setSortBy={this.setSortBy}
            setTopic={this.setTopic}
          />
          <Topics path="/topics" topics={topics} setTopic={this.setTopic} />
          <Article path="/articles/:article_id" />
          {/* <PostArticle path='/newarticle' /> */}
          {/* <Error path="/error" /> */}
        </Router>
        {/* <Post /> */}
        {/* <Footer /> */}
      </div>
    );
  }

  setTopic = topic => {
    this.setState({ topic });
  };

  setSortBy = sort_by => {
    this.setState({ sort_by });
  };

  setOrder = order => {
    this.setState({ order });
  };

  componentDidMount = async () => {
    const { topics } = await api.fetchTopics();
    const { articles } = await api.fetchArticles();
    this.setState({ topics, articles });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { order, topic, sort_by } = this.state;
    if (prevState.topic !== this.state.topic) {
      const { articles } = await api.fetchArticles(topic, sort_by, order);
      this.setState({ articles });
    }
    if (prevState.sort_by !== this.state.sort_by) {
      const { articles } = await api.fetchArticles(topic, sort_by, order);
      this.setState({ articles });
    }
    if (prevState.order !== this.state.order) {
      const { articles } = await api.fetchArticles(topic, sort_by, order);
      this.setState({ articles });
    }
  };
}

export default App;
