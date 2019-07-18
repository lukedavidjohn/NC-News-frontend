import React from "react";
import { Link } from "@reach/router";
import * as func from "../utils/functions";

const ArticleList = props => {
  const { articles } = props;
  return (
    <ul>
      {articles.map(article => {
        return (
          <li className="ArtListItem" key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <h3>{article.title}</h3>
              <p>{func.formatDate(article.created_at)}</p>
              <p>{article.comment_count} comments</p>
              <p>{article.votes} likes</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;