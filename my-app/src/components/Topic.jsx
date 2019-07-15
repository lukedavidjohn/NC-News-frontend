import React, { Component } from "react";
import { Link } from "@reach/router";
import "../CSS/ArticleList.css";

class Topic extends Component {
  render() {
    const { articles, topic } = this.props;
    console.log(articles);
    return (
      <div className="Homepage">
        <h1>{topic}</h1>
        <ul className="ArticleList">
          {articles
            .filter(article => article.topic === topic)
            .map(article => {
              return (
                <Link
                  to={`/articles/${article.article_id}`}
                  className="ArtItemList"
                  key={article.article_id}
                >
                  <h2>{article.title}</h2>
                  <h3>{article.body.slice(0, 50)}</h3>
                </Link>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Topic;
