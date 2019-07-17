import React, { Component } from "react";
import { Link } from "@reach/router";
// import FilterBar from "./FilterBar";
import "../CSS/Main.css";
import "../CSS/ArticleList.css";

class Homepage extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="ArticleList">
        {/* <FilterBar /> */}
        <ul>
          {articles.map(article => {
            return (
              <li className="ArtListItem" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h3>{article.title}</h3>
                  <p>{article.comment_count} comments</p>
                  <p>{article.votes} votes</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Homepage;
