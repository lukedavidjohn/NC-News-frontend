import React, { Component } from "react";
import * as api from "../utils/apiCalls";
import "../CSS/ArticleList.css";

class Likes extends Component {
  state = {
    voteChange: 0,
    dislikeDisabled: false,
    id: null,
    item: null,
    likeDisabled: false
  };
  render() {
    const { votes } = this.props.item;
    const { dislikeDisabled, item, likeDisabled, voteChange } = this.state;
    return (
      <div className="ArticleList">
        <button
          onClick={this.handleLike}
          className={item === "article" ? "ArtListItem" : "Comment"}
          disabled={likeDisabled}
        >
          Like this {item}
        </button>
        <button
          onClick={this.handleDislike}
          className={item === "article" ? "ArtListItem" : "Comment"}
          disabled={dislikeDisabled}
        >
          Dislike this {item}
        </button>
        <p>{votes + Number(voteChange)} likes</p>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.item.comment_id) {
      this.setState({ id: this.props.item.comment_id, item: "comment" });
    } else this.setState({ id: this.props.item.article_id, item: "article" });
  }

  handleLike = () => {
    console.log(this.props.item, this.state.item, this.state.id);
    if (this.state.item === "article") {
      api.voteArticleByArticleId(this.state.id, 1);
    } else api.voteCommentByCommentId(this.state.id, 1);
    this.setState({
      voteChange: 1,
      dislikeDisabled: false,
      likeDisabled: true
    });
  };
  handleDislike = () => {
    console.log(this.props.item, this.state.item, this.state.id);
    if (this.state.item === "article") {
      api.voteArticleByArticleId(this.state.id, -1);
    } else api.voteCommentByCommentId(this.state.id, -1);
    this.setState({
      voteChange: -1,
      dislikeDisabled: true,
      likeDisabled: false
    });
  };
}

export default Likes;
