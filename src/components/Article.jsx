import React, { Component } from "react";
import { navigate } from "@reach/router";

import "../CSS/Main.css";

import * as api from "../utils/apiCalls";

import ArticleCard from "./ArticleCard";
import CommentsCard from "./CommentsCard";
import Loading from "./Loading";

class Article extends Component {
  state = {
    article: {},
    isLoading: true
  };
  render() {
    const { article, isLoading } = this.state;
    return (
      <div className="Main">
        {this.props.location.state !== null &&
        this.props.location.state.postSuccessful ? (
          <p>Post successful!</p>
        ) : null}
        {isLoading === true ? (
          <Loading />
        ) : (
          <div>
            <ArticleCard article={article} />
            <CommentsCard
              article_id={article.article_id}
              comment_count={article.comment_count}
            />
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api
      .fetchArticleByArticleId(article_id)
      .then(articles => {
        this.setState({
          article: articles.article,
          isLoading: false
        });
      })
      .catch(({ response }) => {
        navigate("/Error", {
          replace: true,
          state: {
            status: response.status,
            message: response.data.msg
          }
        });
      });
  }
}

export default Article;
