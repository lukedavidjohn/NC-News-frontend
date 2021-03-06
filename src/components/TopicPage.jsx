import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

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
    article_count: null,
    articles: null,
    isDisabled: false,
    isLoading: true,
    order: null,
    sort_by: null,
    p: 1
  };
  render() {
    const { order, path, sort_by, topic } = this.props;
    const { articles, isDisabled, isLoading } = this.state;
    return (
      <div className="Main">
        {isLoading === true ? (
          <Loading />
        ) : (
          <div className="List">
            <Link className="Button" to="/post" id="createPost">
              create post
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
            <button
              disabled={isDisabled}
              onClick={this.handleClick}
              className="Button"
            >
              {isDisabled === false ? "get more articles" : "no more articles"}
            </button>
          </div>
        )}
      </div>
    );
  }

  handleClick = () => {
    console.log(Math.ceil(18 / 10));
    if (this.state.p + 1 <= Math.ceil(this.state.article_count / 10)) {
      this.setState({ p: this.state.p + 1 });
    } else this.setState({ isDisabled: true });
  };

  setOrder = order => {
    this.setState({ order });
  };

  setSortBy = sort_by => {
    this.setState({ sort_by });
  };

  componentDidMount = () => {
    const { order, p, topic } = this.props;
    this.getArticles(topic, "votes", order, p);
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { path, topic } = this.props;
    const { order, p, sort_by } = this.state;
    if (prevProps.topic !== topic) {
      await this.getArticles(topic, sort_by, order, p);
    }
    if (prevState.sort_by !== sort_by) {
      await this.getArticles(topic, sort_by, order, p);
    }
    if (prevState.order !== order) {
      await this.getArticles(topic, sort_by, order, p);
    }
    if (prevState.p !== p) {
      await this.getArticles(topic, sort_by, order, p);
    }
    if (path !== prevProps.path && path === "/") {
      await this.getArticles(topic, "votes", order, p);
    }
  };

  getArticles = async (topic, sort_by, order, p) => {
    await this.setState({ isLoading: true });
    try {
      const { articles, article_count } = await api.fetchArticles(
        topic,
        sort_by,
        order,
        p
      );
      await this.setState({ article_count, articles });
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 500);
    } catch ({ response: { data } }) {
      navigate("/Error", {
        state: {
          status: data.status,
          message: data.msg
        }
      });
    }
  };

  // componentDidMount() {
  // this.props.setTopic(this.props.topic);
  // }
}

export default TopicPage;
