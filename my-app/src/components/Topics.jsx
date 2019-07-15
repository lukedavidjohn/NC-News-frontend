import React, { Component } from "react";
import { Link } from "@reach/router";

class Topics extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div>
        <li className="ArtListItem">Post a new topic</li>
        <ul className="ArticleList">
          {topics.map(topic => {
            return (
              <Link
                className="ArtListItem"
                to={`/${topic.slug}`}
                key={topic.slug}
              >
                {topic.slug}
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
