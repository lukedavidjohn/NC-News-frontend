import React, { Component } from "react";
import { Link } from "@reach/router";

class Topics extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div className="ArticleList">
        <ul>
          {topics.map(topic => {
            return (
              <li className="ArtListItem" key={topic.slug}>
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
    );
  }
}

export default Topics;
