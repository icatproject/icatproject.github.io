import React from 'react';
import { navigate } from 'gatsby';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <label>
        <span className="screen-reader-text">Search: </span>
        <input
          title="Search"
          type="text"
          value={this.state.query}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          placeholder="Search..."
          css={this.props.inputCSS}
        />
      </label>
    );
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.search(e);
    }
  }

  search = event => {
    const query = event.target.value;
    navigate('/search?query=' + query);
  };
}
