import React, { Component } from "react";
import "../CSS/Main.css";
import "../CSS/ArticleList.css";
import SortBar from "./SortBar";
import ArticleList from "./ArticleList";

class Homepage extends Component {
  state = {
    sort_by: ""
  };
  render() {
    const { articles, setSortBy } = this.props;
    return (
      <div className="ArticleList">
        <label>Sort by</label>
        <SortBar setSortBy={setSortBy} />
        <ArticleList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    this.props.setTopic(this.props.topic);
  }
}

export default Homepage;
