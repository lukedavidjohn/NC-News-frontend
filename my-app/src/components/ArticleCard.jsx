import React from "react";

const ArticleCard = props => {
  const { article, togglePostForm } = props;
  return (
    <div className="ArticleList">
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>{article.created_at}</p>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <p>{article.votes} votes</p>
      <button onClick={togglePostForm} className="ArtListItem">
        Leave a comment
      </button>
    </div>
  );
};

export default ArticleCard;
