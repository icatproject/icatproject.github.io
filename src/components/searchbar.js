import React from "react";
import { navigate } from "gatsby";

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  render() {
    return (
      <label>
        <span className="screen-reader-text">Search: </span>
        <input
          title="Search"
          type="text"
          defaultValue={this.state.query}
          onKeyPress={this.handleKeyPress}
          placeholder="Search..."
          css={this.props.inputCSS}
        />
      </label>
    );
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.search(e);
    }
  }

  search = event => {
    const query = event.target.value;
    this.setState({ query: query });
    navigate("/search?query=" + query);
  };
}
