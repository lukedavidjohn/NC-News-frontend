import React from "react";
import { Link } from "@reach/router";
import "../CSS/Nav.css";

class Nav extends React.Component {
  render() {
    const { topics } = this.props;
    return (
      <nav className="Nav">
        <Link to="/">Home</Link>
        <Link to="/topics">All topics</Link>
        {topics.slice(0, 4).map(topic => {
          return (
            <Link to={`/${topic.slug}`} key={topic.slug}>
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Nav;
