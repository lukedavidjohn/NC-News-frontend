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
    const { articles, setOrder, setSortBy } = this.props;
    return (
      <div className="ArticleList">
        <SortBar setSortBy={setSortBy} setOrder={setOrder} />
        <ArticleList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    this.props.setTopic(this.props.topic);
  }
}

export default Homepage;
