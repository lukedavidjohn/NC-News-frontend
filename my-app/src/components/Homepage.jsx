import React, { Component } from "react";
import { Link } from "@reach/router";
// import FilterBar from "./FilterBar";
import "../CSS/Main.css";
import "../CSS/ArticleList.css";

class Homepage extends Component {
  state = {
    // showFilterBar: false,
    sort_by: ""
  };
  render() {
    const { articles } = this.props;
    return (
      <div className="ArticleList">
        <label>Sort by</label>
        {/* {this.state.showFilterBar === false ? (
          <div />
        ) : ( */}
        <div>
          <button value="created_at" onClick={this.sort}>
            Date
          </button>
          <button value="comment_count" onClick={this.sort}>
            Comments
          </button>
          <button value="votes" onClick={this.sort}>
            Likes
          </button>
        </div>
        {/* )} */}
        <ul>
          {articles.map(article => {
            return (
              <li className="ArtListItem" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h3>{article.title}</h3>
                  <p>{article.comment_count} comments</p>
                  <p>{article.votes} likes</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  // showFilterBar = () => {
  //   if (this.state.showFilterBar === false) {
  //     this.setState({ showFilterBar: true });
  //   } else this.setState({ showFilterBar: false });
  // };
  sort = event => {
    this.setState({ sort_by: event.target.value });
    this.props.setSortBy(this.state.sort_by);
    // this.setState({ showFilterBar: false });
  };

  componentDidMount() {
    this.props.setTopic(this.props.topic);
  }
}

export default Homepage;
