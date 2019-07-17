import React from "react";

class CommentsList extends React.Component {
  state = {
    // isDisabled: ?
  };
  render() {
    const {
      article,
      commentChange,
      comments,
      optimisticBody,
      showPostForm,
      user,
      togglePostForm,
      handleChange,
      handleSubmit,
      handleClick
    } = this.props;
    console.log(user);
    return (
      <div className="ArticleList">
        <button onClick={togglePostForm} className="ArtListItem">
          Leave a comment
        </button>
        {showPostForm === false ? (
          <div />
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Tell us what you think, {user}:
              <input type="text" name="commentBody" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
        <p>{Number(article.comment_count) + Number(commentChange)} comments:</p>
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
                    onClick={handleClick}
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
    );
  }
}

export default CommentsList;
