import React, { Component } from "react";
import * as api from "../utils/apiCalls";
import ArticleCard from "./ArticleCard";
import CommentsList from "./CommentsList";

class Article extends Component {
  state = {
    article: {},
    isLoading: true
  };
  render() {
    const { article, isLoading } = this.state;
    return (
      <div>
        {isLoading === true ? (
          "loading"
        ) : (
          <div>
            <ArticleCard article={article} formatDate={this.formatDate} />
            <CommentsList article={article} formatDate={this.formatDate} />
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api.fetchArticleByArticleId(article_id).then(articles => {
      this.setState({
        article: articles.article,
        isLoading: false
      });
    });
  }
  formatDate = date => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      new Date(date).getDate() +
      " " +
      months[Number(new Date(date).getMonth())] +
      " " +
      new Date(date).getFullYear()
    );
  };
}

export default Article;
