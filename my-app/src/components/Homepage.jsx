import React, { Component } from "react";
import "../CSS/Main.css";
import "../CSS/ArticleList.css";
import ArticleList from "./ArticleList";
import SortBar from "./SortBar";
import loading from "../utils/loading.jpg";

class Homepage extends Component {
  state = {
    sort_by: ""
  };
  render() {
    const { articles, isLoading, setOrder, setSortBy } = this.props;
    return (
      <div>
        {isLoading === true ? (
          <div>
            <p>Loading</p>
            <img className="Image" src={loading} />
          </div>
        ) : (
          <div className="ArticleList">
            <SortBar setOrder={setOrder} setSortBy={setSortBy} />
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

export default Homepage;
