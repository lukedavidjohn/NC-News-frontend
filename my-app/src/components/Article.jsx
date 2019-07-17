import React, { Component } from "react";
import "../CSS/ArticleList.css";
import * as api from "../utils/apiCalls";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    showPostForm: false,
    user: "jessjelly",
    commentBody: ""
  };
  render() {
    const { article, comments, showPostForm, user } = this.state;
    return (
      <div className="ArticleList">
        <h3>{article.title}</h3>
        <p>Author: {article.author}</p>
        <p>{article.created_at}</p>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <p>{article.votes} votes</p>
        <button onClick={this.togglePostForm} className="ArtListItem">
          Shit your unwelcome opinions into the world
        </button>
        {showPostForm === false ? (
          <div />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label>
              Go on then, {user}, give us your opinion:
              <input
                type="text"
                name="commentBody"
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
        <p>{article.comment_count} comments:</p>
        <ul>
          {comments.map(comment => {
            return (
              <li className="ArtListItem" key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p>{comment.created_at}</p>
                <p>{comment.body}</p>
                <p>{comment.votes} votes</p>
              </li>
            );
          })}
        </ul>
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
    console.log(event);
    api
      .postCommentByArticleId(
        this.props.article_id,
        this.state.user,
        this.state.commentBody
      )
      .then(comment => {
        console.log(comment);
      });
  };
}

export default Article;
