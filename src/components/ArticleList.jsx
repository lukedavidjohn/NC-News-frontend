import React, { Component } from "react";
import { Link } from "@reach/router";

import "../CSS/ArticleList.css";
import "../CSS/Main.css";

import * as api from "../utils/apiCalls";
import * as func from "../utils/functions";

import Loading from "./Loading";

class ArticleList extends Component {
  state = {
    articles: null,
    isLoading: true
  };
  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        {isLoading === true ? (
          <div className="Main">
            <Loading />
          </div>
        ) : (
          <ul>
            {articles.map((article, idx) => {
              return (
                <li className="ArtListItem" key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    <img alt="placeholder" src={func.randomPictures[idx]} />
                    <h3>{article.title}</h3>
                    <h4>{article.author}</h4>
                    <p>
                      {article.comment_count} comments | {article.votes} likes
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    const { order, topic } = this.props;
    this.getArticles(topic, "votes", order);
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { topic, sort_by, order } = this.props;
    if (prevProps.topic !== topic) {
      this.getArticles(topic, sort_by, order);
    }
    if (prevState.sort_by !== sort_by) {
      this.getArticles(topic, sort_by, order);
    }
    if (prevState.order !== order) {
      this.getArticles(topic, sort_by, order);
    }
    const { path } = this.props;
    if (path !== prevProps.path && path === "/") {
      this.getArticles(topic, "votes", order);
    }
  };

  getArticles = async (topic, sort_by, order) => {
    this.setState({ isLoading: true });
    const { articles } = await api.fetchArticles(topic, sort_by, order);
    this.setState({ articles });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  };
}

export default ArticleList;
