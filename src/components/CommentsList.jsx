import React from "react";

import * as api from "../utils/apiCalls";
import * as func from "../utils/functions";

import Likes from "./Likes";

class CommentsList extends React.Component {
  state = {
    comments: null,
    isLoading: true
  };

  render() {
    const { comment, user } = this.props;
    const { comments, isLoading } = this.state;
    return (
      <div>
        {isLoading === true ? (
          "loading"
        ) : (
          <ul>
            {comment === null ? null : (
              <li className="ArtListItem">
                <h4>{comment.author}</h4>
                <p>{func.formatDate(comment.created_at)}</p>
                <p>{comment.body}</p>
                <p>{comment.votes}</p>
                <Likes item={comment} />
                {comment.author !== user ? null : (
                  <button value={comment.comment_id} onClick={this.handleClick}>
                    <h4>Delete comment</h4>
                  </button>
                )}
              </li>
            )}
            {comments.map(comment => {
              return (
                <li className="ArtListItem" key={comment.comment_id}>
                  <h3>{comment.author}</h3>
                  <p>{func.formatDate(comment.created_at)}</p>
                  <p>{comment.body}</p>
                  <Likes item={comment} />
                  {comment.author !== user ? null : (
                    <button
                      value={comment.comment_id}
                      onClick={this.handleClick}
                    >
                      <h3>Delete comment</h3>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  handleClick = event => {
    api.deleteCommentByCommentId(event.target.value);
    this.setState({
      comments: this.state.comments.filter(ele => {
        return ele.comment_id !== Number(event.target.value);
      }),
      commentChange: -1
    });
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.fetchCommentsByArticleId(article_id).then(comments => {
      this.setState({
        comments: comments.comments,
        isLoading: false
      });
    });
  }
}

export default CommentsList;
