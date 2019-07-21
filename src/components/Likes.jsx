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
        <input
          alt="thumbs up"
          type="image"
          src={ThumbsUp}
          className="Thumbs"
          disabled={likeDisabled}
          onClick={this.handleLike}
          value={1}
        />
        <input
          alt="thumbs down"
          type="image"
          src={ThumbsDown}
          className="Thumbs"
          disabled={dislikeDisabled}
          onClick={this.handleLike}
          value={-1}
        />
        <p>{votes + Number(voteChange)} likes</p>
      </div>
    );
  }

  handleLike = event => {
    const { value } = event.target;
    console.log(event.target);
    if (this.props.item.comment_id) {
      api.voteCommentByCommentId(this.props.item.comment_id, value);
    } else api.voteArticleByArticleId(this.props.item.article_id, value);
    this.setState({
      voteChange: value,
      likeDisabled: true,
      dislikeDisabled: true
    });
  };
}

export default Likes;
