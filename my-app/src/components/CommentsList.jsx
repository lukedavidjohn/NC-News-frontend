import React from "react";
import * as api from "../utils/apiCalls";

class CommentsList extends React.Component {
  state = {
    // isDisabled: ?
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
            <button onClick={this.togglePostForm} className="ArtListItem">
              Leave a comment
            </button>
            {showPostForm === false ? (
              <div />
            ) : (
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
            <p>
              {Number(article.comment_count) + Number(commentChange)} comments:
            </p>
            <ul>
              {optimisticBody === null ? (
                <div />
              ) : (
                <li className="ArtListItem">
                  <h3>{optimisticBody.author}</h3>
                  <p>{optimisticBody.created_at}</p>
                  <p>{optimisticBody.body}</p>
                  <p>{optimisticBody.votes}</p>
                </li>
              )}
              {comments.map(comment => {
                return (
                  <li className="ArtListItem" key={comment.comment_id}>
                    <h3>{comment.author}</h3>
                    <p>{comment.created_at}</p>
                    <p>{comment.body}</p>
                    <p>{comment.votes} votes</p>
                    {comment.author !== user ? null : (
                      <button
                        value={comment.comment_id}
                        onClick={this.handleClick}
                        // disabled="false"
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
