import React from "react";

import "../CSS/ArticleCard.css";

import * as func from "../utils/functions";

import Likes from "./Likes";

const ArticleCard = props => {
  const { article } = props;
  return (
    <div className="ArticleCard">
      <h3>{article.title}</h3>
      <h4>{article.author}</h4>
      <p>{func.formatDate(article.created_at)}</p>
      <p>{article.body}</p>
      <h4>Topic: {article.topic}</h4>
      <Likes item={article} />
    </div>
  );
};

export default ArticleCard;
