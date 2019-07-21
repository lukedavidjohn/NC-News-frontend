import React, { Component } from "react";

import "../CSS/ArticleList.css";
import "../CSS/Loading.css";
import "../CSS/Main.css";

import ArticleList from "./ArticleList";
import SortBar from "./SortBar";

class TopicPage extends Component {
  render() {
    const { order, path, sort_by, topic } = this.props;
    return (
      <div className="Main">
        <div className="List">
          <SortBar setOrder={this.setOrder} setSortBy={this.setSortBy} />
          {path === "/" ? <h1>Most popular articles</h1> : <h1>{topic}</h1>}
          <ArticleList
            order={order}
            path={path}
            setIsLoading={this.setIsLoading}
            sort_by={sort_by}
            topic={topic}
          />
        </div>
      </div>
    );
  }

  setSortBy = sort_by => {
    this.setState({ sort_by });
  };

  setOrder = order => {
    this.setState({ order });
  };

  // componentDidMount() {
  // this.props.setTopic(this.props.topic);
  // }
}

export default TopicPage;
