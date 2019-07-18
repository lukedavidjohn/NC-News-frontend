import React, { Component } from "react";

class SortBar extends Component {
  state = {
    showOrder: false,
    showSortBy: false,
    sort_by: "",
    sort_order: ""
  };
  render() {
    const { showOrder, showSortBy } = this.state;
    return (
      <div>
        <button value="showSortBy" onClick={this.handleClick}>
          Sort by
        </button>
        {showSortBy === false ? null : (
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
        )}
        <button value="showOrder" onClick={this.handleClick}>
          Sort order
        </button>
        {showOrder === false ? null : (
          <div>
            <button value="ASC" onClick={this.order}>
              Ascending
            </button>
            <button value="DESC" onClick={this.order}>
              Descending
            </button>
          </div>
        )}
      </div>
    );
  }

  handleClick = event => {
    if (this.state[event.target.value] === false) {
      this.setState({ [event.target.value]: true });
    } else this.setState({ [event.target.value]: false });
  };

  sort = event => {
    this.setState({ sort_by: event.target.value });
    this.setState({ showSortBy: false });
  };

  order = event => {
    this.setState({ sort_order: event.target.value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.sort_by !== this.state.sort_by) {
      this.props.setSortBy(this.state.sort_by);
    }
    if (prevState.sort_order !== this.state.sort_order) {
      this.props.setOrder(this.state.sort_order);
    }
  };
}

export default SortBar;
