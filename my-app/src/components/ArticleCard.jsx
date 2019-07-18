import React from "react";
import Likes from "./Likes";

const ArticleCard = props => {
  const { article, formatDate } = props;
  return (
    <div className="ArticleList">
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>{formatDate(article.created_at)}</p>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <Likes item={article} />
    </div>
  );
};

export default ArticleCard;
