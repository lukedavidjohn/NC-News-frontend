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
            <ArticleCard article={article} />
            <CommentsList article={article} />
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
}

export default Article;
