import React from "react";

import "../CSS/ArticleList.css";
import "../CSS/Buttons.css";

import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

class CommentsCard extends React.Component {
  state = {
    comment: null,
    commentChange: 0,
    showPostForm: false,
    user: "jessjelly"
  };

  render() {
    const { article_id, comment_count } = this.props;
    const { comment, commentChange, showPostForm, user } = this.state;
    return (
      <div className="List">
        <button onClick={this.togglePostForm} className="Button">
          leave a comment
        </button>
        {showPostForm === false ? null : (
          <CommentForm
            article_id={article_id}
            setComment={this.setComment}
            togglePostForm={this.togglePostForm}
            user={user}
          />
        )}
        <p>{Number(comment_count) + Number(commentChange)} comments:</p>
        <CommentsList
          article_id={article_id}
          comment={comment}
          user={user}
          setComment={this.setComment}
        />
      </div>
    );
  }

  setComment = (comment, commentChange) => {
    this.setState({ comment, commentChange });
  };

  togglePostForm = () => {
    if (this.state.showPostForm === false) {
      this.setState({ showPostForm: true });
    } else this.setState({ showPostForm: false });
  };
}

export default CommentsCard;
