import React, { Component } from "react";
import "../CSS/ArticleList.css";
import ArticleList from "./ArticleList";
import SortBar from "./SortBar";
import loading from "../utils/loading.jpg";

class Topic extends Component {
  render() {
    const { articles, isLoading, setOrder, setSortBy, topic } = this.props;
    return (
      <div>
        {isLoading === true ? (
          <div>
            <p>Loading</p>
            <img className="Image" src={loading} />
          </div>
        ) : (
          <div className="ArticleList">
            <SortBar setSortBy={setSortBy} setOrder={setOrder} />
            <h1>{topic}</h1>
            <ArticleList articles={articles} />
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.props.setTopic(this.props.topic);
  }
}

export default Topic;
