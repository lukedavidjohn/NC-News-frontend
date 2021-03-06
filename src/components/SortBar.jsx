import React, { Component } from "react";
import Select from "react-select";

import "../CSS/SortBar.css";

class SortBar extends Component {
  state = {
    sort_by: null,
    order: null,
    sortByButtons: [
      { label: "date", value: "created_at" },
      { label: "comments", value: "comment_count" },
      { label: "likes", value: "votes" }
    ],
    sortOrderButtons: [
      { label: "ascending", value: "ASC" },
      { label: "descending", value: "DESC" }
    ]
  };
  render() {
    const { sortByButtons, sortOrderButtons } = this.state;
    return (
      <div className="SortBar">
        <li>
          <Select
            onChange={this.handleChangeSortBy}
            placeholder={"sort by"}
            options={sortByButtons}
          />
          <Select
            onChange={this.handleChangeOrder}
            placeholder={"sort order"}
            options={sortOrderButtons}
          />
        </li>
      </div>
    );
  }

  handleChangeSortBy = ({ value }) => {
    this.setState({ sort_by: value });
  };

  handleChangeOrder = ({ value }) => {
    this.setState({ order: value });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { sort_by, order } = this.state;
    if (prevState.sort_by !== sort_by) {
      this.props.setSortBy(sort_by);
    }
    if (prevState.order !== order) {
      this.props.setOrder(order);
    }
  };
}

export default SortBar;
