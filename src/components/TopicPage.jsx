import React, { Component } from "react";
import { Link } from "@reach/router";

import "../CSS/ArticleList.css";
import "../CSS/Buttons.css";
import "../CSS/Loading.css";
import "../CSS/Main.css";

import * as api from "../utils/apiCalls";

import ArticleList from "./ArticleList";
import Loading from "./Loading";
import SortBar from "./SortBar";

class TopicPage extends Component {
  state = {
    articles: null,
    isLoading: true,
    order: null,
    sort_by: null
  };
  render() {
    const { order, path, sort_by, topic } = this.props;
    const { articles, isLoading } = this.state;
    return (
      <div className="Main">
        {isLoading === true ? (
          <Loading />
        ) : (
          <div className="List">
            <Link className="Button" to="/post">
              Create Post
            </Link>
            <SortBar setOrder={this.setOrder} setSortBy={this.setSortBy} />
            {path === "/" ? <h1>Most popular articles</h1> : <h1>{topic}</h1>}
            <ArticleList
              articles={articles}
              order={order}
              path={path}
              sort_by={sort_by}
              topic={topic}
            />
          </div>
        )}
      </div>
    );
  }

  setOrder = order => {
    this.setState({ order });
  };

  setSortBy = sort_by => {
    this.setState({ sort_by });
  };

  componentDidMount = () => {
    const { order, topic } = this.props;
    this.getArticles(topic, "votes", order);
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { path, topic } = this.props;
    const { order, sort_by } = this.state;
    if (prevProps.topic !== topic) {
      await this.getArticles(topic, sort_by, order);
    }
    if (prevState.sort_by !== sort_by) {
      await this.getArticles(topic, sort_by, order);
    }
    if (prevState.order !== order) {
      await this.getArticles(topic, sort_by, order);
    }
    if (path !== prevProps.path && path === "/") {
      await this.getArticles(topic, "votes", order);
    }
  };

  getArticles = async (topic, sort_by, order) => {
    await this.setState({ isLoading: true });
    const { articles } = await api.fetchArticles(topic, sort_by, order);
    await this.setState({ articles });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  };

  // componentDidMount() {
  // this.props.setTopic(this.props.topic);
  // }
}

export default TopicPage;
