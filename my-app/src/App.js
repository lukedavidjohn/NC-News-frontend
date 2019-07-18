import React, { Component } from "react";
import { Router } from "@reach/router";

import "./CSS/App.css";

import * as api from "./utils/apiCalls";
import * as func from "./utils/functions";

import Article from "./components/Article";
import Heading from "./components/Heading";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Topic from "./components/Topic";
import Topics from "./components/Topics";

class App extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: "DESC",
    sort_by: "",
    topics: [],
    topic: ""
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
            isLoading={isLoading}
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
    this.setState({
      topics: topics.sort(func.compareTopics),
      articles,
      isLoading: false
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { order, topic, sort_by } = this.state;
    if (prevState.topic !== topic) {
      this.setState({ isLoading: true });
      const { articles } = await api.fetchArticles(topic, sort_by, order);
      this.setState({ articles, isLoading: false });
    }
    if (prevState.sort_by !== sort_by) {
      this.setState({ isLoading: true });
      const { articles } = await api.fetchArticles(topic, sort_by, order);
      this.setState({ articles, isLoading: false });
    }
    if (prevState.order !== order) {
      this.setState({ isLoading: true });
      const { articles } = await api.fetchArticles(topic, sort_by, order);
      this.setState({ articles, isLoading: false });
    }
  };
}

export default App;
