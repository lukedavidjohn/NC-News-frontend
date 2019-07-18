import React, { Component } from "react";

class SortBar extends Component {
  state = {
    // showFilterBar: false,
    sort_by: ""
  };
  render() {
    return (
      // {this.state.showFilterBar === false ? (
      //     <div />
      //   ) : (
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
      //   )}
    );
  }

  sort = event => {
    this.setState({ sort_by: event.target.value });
    this.props.setSortBy(this.state.sort_by);
    // this.setState({ showFilterBar: false });
  };
}

export default SortBar;
