import React, { Component } from "react";
import { Link } from "@reach/router";

import "../CSS/Nav.css";

class Nav extends Component {
  render() {
    const { topics } = this.props;
    return (
      <nav className="Nav">
        {topics
          ? topics.slice(0, 4).map(topic => {
              return (
                <Link
                  className="Link"
                  to={`/topics/${topic.slug}`}
                  key={topic.slug}
                >
                  {topic.slug}
                </Link>
              );
            })
          : null}
      </nav>
    );
  }
}

export default Nav;
