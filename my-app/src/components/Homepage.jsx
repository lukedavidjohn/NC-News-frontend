import React, { Component } from "react";
// import { Link } from "@reach/router";
import "../CSS/Homepage.css";
import "../CSS/ArticleList.css";

class Homepage extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="Homepage">
        <li className="ArtListItem">Post a new article</li>
        <ul className="ArticleList">
          {articles.map(article => {
            return (
              <li className="ArtListItem" key={article.article_id}>
                <h2>{article.title}</h2>
                <h3>{article.body.slice(0, 50)}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Homepage;
