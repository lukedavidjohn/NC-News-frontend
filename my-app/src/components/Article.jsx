import React, { Component } from "react";
import "../CSS/ArticleList.css";
import * as api from "../utils/apiCalls";
import ArticleCard from "./ArticleCard";
import CommentsList from "./CommentsList";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    showPostForm: false,
    user: "jessjelly",
    commentBody: "",
    optimisticBody: null,
    commentChange: 0,
    isLoading: true
  };
  render() {
    const {
      article,
      comments,
      showPostForm,
      user,
      optimisticBody,
      commentChange,
      isLoading
    } = this.state;
    return (
      <div>
        {isLoading === true ? (
          "loading"
        ) : (
          <ArticleCard article={article} togglePostForm={this.togglePostForm} />
        )}
        {isLoading === true ? (
          "loading"
        ) : (
          <CommentsList
            article={article}
            commentChange={commentChange}
            comments={comments}
            optimisticBody={optimisticBody}
            showPostForm={showPostForm}
            user={user}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClick={this.handleClick}
          />
        )}
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    Promise.all([
      api.fetchArticleByArticleId(article_id),
      api.fetchCommentsByArticleId(article_id)
    ]).then(([articles, comments]) => {
      this.setState({
        article: articles.article,
        comments: comments.comments,
        isLoading: false
      });
    });
  }
  togglePostForm = () => {
    if (this.state.showPostForm === false) {
      this.setState({ showPostForm: true });
    } else this.setState({ showPostForm: false });
  };
  handleChange = event => {
    this.setState({ commentBody: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    api
      .postCommentByArticleId(
        this.props.article_id,
        this.state.user,
        this.state.commentBody
      )
      .then(comment => {
        this.setState({ optimisticBody: comment.data.comment });
        this.setState({ commentChange: 1 });
        this.setState({ showPostForm: false });
      });
  };
  handleClick = event => {
    api.deleteCommentByCommentId(event.target.value);
  };
}

export default Article;
