import React from "react";

const CommentsList = props => {
  const {
    article,
    commentChange,
    comments,
    optimisticBody,
    showPostForm,
    user,
    handleChange,
    handleSubmit,
    handleClick
  } = props;
  return (
    <div className="ArticleList">
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
                <button value={comment.comment_id} onClick={handleClick}>
                  Delete comment
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
