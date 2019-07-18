import React from "react";
import Likes from "./Likes";
import * as func from "../utils/functions";

const ArticleCard = props => {
  const { article } = props;
  return (
    <div className="ArticleList">
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>{func.formatDate(article.created_at)}</p>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <Likes item={article} />
    </div>
  );
};

export default ArticleCard;
