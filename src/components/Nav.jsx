import React, { Component } from "react";
import { Link } from "@reach/router";

import * as api from "../utils/apiCalls";
import * as func from "../utils/functions";

import "../CSS/Nav.css";

class Nav extends Component {
  state = {
    topics: null
  };
  render() {
    const { topics } = this.state;
    return (
      <nav className="Nav">
        {/* <Link className="Link" to="/">
          home
        </Link> */}
        {/* <Link className="Link" to="/topics">
          all topics
        </Link> */}
        {topics
          ? topics.slice(0, 4).map(topic => {
              return (
                <Link
                  className="Link"
                  to={`/${topic.slug}`}
                  key={topic.slug}
                  onClick={() => {
                    this.setTopic(topic.slug);
                  }}
                >
                  {topic.slug}
                </Link>
              );
            })
          : null}
      </nav>
    );
  }

  componentDidMount = async () => {
    await this.getTopics();
  };

  getTopics = async () => {
    const { topics } = await api.fetchTopics();
    this.setState({
      topics: topics.sort(func.compareTopics)
    });
  };

  setTopic = topic => {
    this.setState({ topic });
  };
}

export default Nav;
