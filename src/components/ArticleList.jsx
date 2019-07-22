import React, { Component } from "react";
import { Link } from "@reach/router";

import "../CSS/ArticleList.css";
import "../CSS/Main.css";

import * as func from "../utils/functions";

class ArticleList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="Main">
        <ul>
          {articles.map((article, idx) => {
            return (
              <li className="ArtListItem" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <img alt="placeholder" src={func.randomPicturesThumbs[idx]} />
                  <h3>{article.title}</h3>
                  <h4>{article.author}</h4>
                  <p>
                    {article.comment_count} comments | {article.votes} likes
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
