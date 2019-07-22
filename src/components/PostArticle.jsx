import React, { Component } from "react";
import Select from "react-select";
import { navigate } from "@reach/router";

import * as api from "../utils/apiCalls";

import "../CSS/ArticleForm.css";
import "../CSS/Buttons.css";
import "../CSS/Main.css";

class PostArticle extends Component {
  state = {
    topicSelects: [
      { label: "coding", value: "coding" },
      { label: "cooking", value: "cooking" },
      { label: "football", value: "football" }
    ],
    author: "jessjelly",
    body: null,
    title: null,
    topic: null
  };
  render() {
    const { topicSelects } = this.state;
    return (
      <div className="Main">
        <form className="ArticleForm" onSubmit={this.handleSubmit}>
          <li>
            <Select
              onChange={this.handleSelect}
              placeholder={"topic"}
              options={topicSelects}
            />
          </li>
          <input onChange={this.handleTitleChange} placeholder="Title" />
          <textarea
            onChange={this.handleBodyChange}
            name="articleBody"
            placeholder="Text"
            type="text"
          />
          <input className="Button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleBodyChange = event => {
    this.setState({
      body: event.target.value
    });
  };

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleSelect = ({ value }) => {
    this.setState({ topic: value, label: value });
  };

  handleSubmit = event => {
    const { author, body, title, topic } = this.state;
    event.preventDefault();
    api
      .postArticle(author, body, title, topic)
      .then(({ article }) => {
        navigate(`/articles/${article.article_id}`, {
          state: {
            postSuccessful: true
          }
        });
      })
      .catch(({ response }) => {
        navigate("/Error", {
          replace: true,
          state: {
            status: response.status,
            message: response.data.msg
          }
        });
      });
  };
}

export default PostArticle;

//POSTARTICLE
//form form form
//handlechange
//handlesubmit
// postArticle(article).then(article => {
// navigate(`/articles/${article.article_id}`, {
// state : {
// postSuccessful: true
// }
// })
// .catch((err) => {
// navigate('/error', {
// code: err.status, message: "nope"
//   })
// })
// })
// THIS GOES SOMEWHERE : // {this.props.location.state.postSuccessful && <p>Article posted successfully!</p>}
