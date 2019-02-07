import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

export default class Searchbar extends React.Component {
  static handleKeyPress(e) {
    if (e.key === 'Enter') {
      const query = e.target.value;
      navigate(`/search?query=${query}`);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    const { id, inputCSS } = this.props;
    const { query } = this.state;
    return (
      <label htmlFor={id}>
        <span className="screen-reader-text">Search: </span>
        <input
          id={id}
          title="Search"
          type="search"
          role="searchbox"
          value={query}
          onKeyPress={Searchbar.handleKeyPress}
          onChange={this.handleChange}
          placeholder="Search..."
          css={inputCSS}
        />
      </label>
    );
  }
}

Searchbar.propTypes = {
  id: PropTypes.string.isRequired,
  inputCSS: PropTypes.string,
};

Searchbar.defaultProps = {
  inputCSS: '',
};
