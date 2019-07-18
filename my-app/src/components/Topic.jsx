import React, { Component } from "react";
import "../CSS/ArticleList.css";
import SortBar from "./SortBar";
import ArticleList from "./ArticleList";

class Topic extends Component {
  render() {
    const { articles, setOrder, setSortBy, topic } = this.props;
    return (
      <div className="ArticleList">
        <SortBar setSortBy={setSortBy} setOrder={setOrder} />
        <h1>{topic}</h1>
        <ArticleList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    this.props.setTopic(this.props.topic);
  }
}

export default Topic;
