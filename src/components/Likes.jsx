import React, { Component } from "react";

import "../CSS/ArticleList.css";
import "../CSS/Buttons.css";
import ThumbsDown from "../CSS/thumb-down-button.svg";
import ThumbsUp from "../CSS/thumb-up-button.svg";

import * as api from "../utils/apiCalls";

class Likes extends Component {
  state = {
    dislikeDisabled: false,
    likeDisabled: false,
    voteChange: 0
  };
  render() {
    const { votes } = this.props.item;
    const { dislikeDisabled, likeDisabled, voteChange } = this.state;
    return (
      <div className="ArticleList">
        <img
          alt="thumbs up"
          src={ThumbsUp}
          className="Thumbs"
          disabled={likeDisabled}
          onClick={() => this.handleLike(1)}
        />
        <img
          alt="thumbs down"
          src={ThumbsDown}
          className="Thumbs"
          disabled={dislikeDisabled}
          onClick={() => this.handleLike(-1)}
        />
        <p>{votes + Number(voteChange)} likes</p>
      </div>
    );
  }

  handleLike = value => {
    if (this.props.item.comment_id) {
      api.voteCommentByCommentId(this.props.item.comment_id, value);
    } else api.voteArticleByArticleId(this.props.item.article_id, value);
    this.setState({
      voteChange: value
    });
    if (value === 1)
      this.setState({ dislikeDisabled: false, likeDisabled: true });
    else if (value === -1)
      this.setState({ dislikeDisabled: true, likeDisabled: false });
  };
}

export default Likes;
