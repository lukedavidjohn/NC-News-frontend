import React, { Component } from "react";
import { Link } from "@reach/router";

import "../CSS/ArticleList.css";

class Topics extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div className="Main">
        <div className="List">
          <ul>
            {topics.map(topic => {
              return (
                <li key={topic.slug}>
                  <Link
                    to={`/${topic.slug}`}
                    onClick={() => {
                      this.props.setTopic(topic.slug);
                    }}
                  >
                    <h2>{topic.slug}</h2>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Topics;
