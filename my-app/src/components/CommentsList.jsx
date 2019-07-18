import React from "react";
import "../CSS/ArticleList.css";
import * as api from "../utils/apiCalls";
import * as func from "../utils/functions";
import Likes from "./Likes";

class CommentsList extends React.Component {
  state = {
    commentBody: "",
    commentChange: 0,
    comments: [],
    isLoading: true,
    optimisticBody: null,
    showPostForm: false,
    user: "jessjelly"
  };
  render() {
    const { article } = this.props;
    const {
      commentChange,
      comments,
      isLoading,
      optimisticBody,
      showPostForm,
      user
    } = this.state;
    return (
      <div>
        {isLoading === true ? (
          "loading"
        ) : (
          <div className="ArticleList">
            {/* Leave comment button */}
            <button onClick={this.togglePostForm} className="ArtListItem">
              Leave a comment
            </button>
            {showPostForm === false ? null : (
              // Comment submission form
              <form onSubmit={this.handleSubmit}>
                <label>
                  Tell us what you think, {user}:
                  <input
                    type="text"
                    name="commentBody"
                    onChange={this.handleChange}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            )}
            {/* Comment count */}
            <p>
              {Number(article.comment_count) + Number(commentChange)} comments:
            </p>
            {/* Optimistic rendering of posted comment */}
            <ul>
              {optimisticBody === null ? null : (
                <li className="ArtListItem">
                  <h3>{optimisticBody.author}</h3>
                  <p>{func.formatDate(optimisticBody.created_at)}</p>
                  <p>{optimisticBody.body}</p>
                  <p>{optimisticBody.votes}</p>
                </li>
              )}
              {/* Comment list */}
              {comments.map(comment => {
                return (
                  <li className="ArtListItem" key={comment.comment_id}>
                    <h3>{comment.author}</h3>
                    <p>{func.formatDate(comment.created_at)}</p>
                    <p>{comment.body}</p>
                    <Likes item={comment} />
                    {/* Delete comment button */}
                    {comment.author !== user ? null : (
                      <button
                        value={comment.comment_id}
                        onClick={this.handleClick}
                      >
                        Delete comment
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props.article;
    api.fetchCommentsByArticleId(article_id).then(comments => {
      this.setState({
        comments: comments.comments,
        isLoading: false
      });
    });
  }
  handleChange = event => {
    this.setState({ commentBody: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    api
      .postCommentByArticleId(
        this.props.article.article_id,
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
    this.setState({
      comments: this.state.comments.filter(ele => {
        return ele.comment_id !== Number(event.target.value);
      }),
      commentChange: -1
    });
  };
  togglePostForm = () => {
    if (this.state.showPostForm === false) {
      this.setState({ showPostForm: true });
    } else this.setState({ showPostForm: false });
  };
}

export default CommentsList;
