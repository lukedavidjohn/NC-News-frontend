import React, { Component } from "react";
import * as api from "../utils/apiCalls";
import { navigate } from "@reach/router";
import "../CSS/CommentForm.css";
import "../CSS/ArticleList.css";
import "../CSS/Buttons.css";

class CommentForm extends Component {
  state = {
    commentBody: null
  };
  render() {
    return (
      <form className="CommentForm" onSubmit={this.handleSubmit}>
        <textarea type="text" name="commentBody" onChange={this.handleChange} />
        <div>
          <input className="Button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ commentBody: event.target.value });
  };

  handleSubmit = event => {
    const { article_id, setComment, togglePostForm, user } = this.props;
    const { commentBody } = this.state;
    event.preventDefault();
    api
      .postCommentByArticleId(article_id, user, commentBody)
      .then(comment => {
        setComment(comment.data.comment, 1);
        togglePostForm();
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
  };
}

export default CommentForm;
