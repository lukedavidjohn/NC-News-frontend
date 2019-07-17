import React from "react";
import { Link } from "@reach/router";
import "../CSS/Nav.css";

class Nav extends React.Component {
  render() {
    const { topics } = this.props;
    return (
      <nav className="Nav">
        <Link className="Link" to="/">
          home
        </Link>
        <Link className="Link" to="/topics">
          all topics
        </Link>
        {topics.slice(0, 4).map(topic => {
          return (
            <Link
              className="Link"
              to={`/${topic.slug}`}
              key={topic.slug}
              onClick={() => {
                this.props.setTopic(topic.slug);
              }}
            >
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Nav;
