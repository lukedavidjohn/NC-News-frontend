import React, { Component } from "react";
import * as api from "../utils/apiCalls";
// import { Link } from "@reach/router";

class Article extends Component {
  state = {
    article: {},
    comments: []
  };
  render() {
    const { article, comments } = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <p>Author: {article.author}</p>
        <p>{article.created_at}</p>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <p>{article.votes} votes</p>
        <p>{article.comment_count} comments</p>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p>{comment.created_at}</p>
              <p>{comment.body}</p>
              <p>{comment.votes} votes</p>
            </li>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api.fetchArticleByArticleId(article_id).then(articles => {
      this.setState({ article: articles.article });
    });
    api.fetchCommentsByArticleId(article_id).then(comments => {
      this.setState({ comments: comments.comments });
    });
  }
}

export default Article;
