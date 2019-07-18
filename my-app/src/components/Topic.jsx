import React, { Component } from "react";
import { Link } from "@reach/router";
// import FilterBar from "./FilterBar";
import "../CSS/ArticleList.css";
import "../CSS/Link.css";
import SortBar from "./SortBar";
import ArticleList from "./ArticleList";

class Topic extends Component {
  render() {
    const { articles, setSortBy, topic } = this.props;
    return (
      <div className="ArticleList">
        <label>Sort by</label>
        <SortBar setSortBy={setSortBy} />
        <h1>{topic}</h1>
        <ArticleList articles={articles} />
      </div>
    );
  }
  // showFilterBar = () => {
  //   if (this.state.showFilterBar === false) {
  //     this.setState({ showFilterBar: true });
  //   } else this.setState({ showFilterBar: false });
  // };

  componentDidMount() {
    this.props.setTopic(this.props.topic);
  }
}

export default Topic;
