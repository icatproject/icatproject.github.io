import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from './dropdown';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleBlur() {
    this.setState({ expanded: false });
  }

  handleFocus() {
    this.setState({ expanded: true });
  }

  handleClick() {
    this.setState((currentState) => ({ expanded: !currentState.expanded }));
  }

  render() {
    const { data } = this.props;
    const { expanded } = this.state;
    const menuVisibiltyCSS = expanded
      ? css`
          left: inherit;
          top: 1.5rem;
        `
      : css`
          top: -9999px;
          left: -9999px;
        `;
    return (
      <nav
        css={css`
          float: right;
          margin: 0;
          height: inherit;
        `}
      >
        <a
          href="#content"
          css={css`
            position: absolute;
            top: -9999px;
            left: -9999px;
            &:focus {
              left: 5px;
              top: 5px;
            }
            background-color: #f1f1f1;
            color: #21759b;
            border-radius: 3px;
            padding: 15px;
            text-decoration: none;
            z-index: 10000;
          `}
        >
          Skip to content
        </a>
        <button
          onClick={this.handleClick}
          type="button"
          aria-haspopup="true"
          aria-expanded={expanded}
          css={css`
            border: none;
            background: none;
            cursor: pointer;
            display: none;
            width: 2.5rem;
            height: 2.5rem;
            text-align: center;
            color: white;
            line-height: 2.5rem;
            @media (max-width: 768px) {
              display: inline-block;
            }
            &:hover,
            &:focus {
              background-color: #939393;
            }
          `}
          aria-controls="main-menu"
        >
          <FontAwesomeIcon icon="bars" title="Menu" />
        </button>
        <ul
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onMouseLeave={this.handleBlur}
          css={css`
            padding: 0 0;
            list-style: none;
            display: inline;
            @media (max-width: 768px) {
              ${menuVisibiltyCSS}
              right: 0px;
              position: absolute;
              padding: 1px;
              background: #000;
              width: 100%;
            }
          `}
          aria-label="main-menu"
          id="main-menu"
        >
          {data.allDirectory.edges.map(({ node }) => (
            <Dropdown directoryName={node.name} key={node.id} menuExpanded={expanded} />
          ))}
        </ul>
      </nav>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDirectory(
          filter: {
            sourceInstanceName: { eq: "content" }
            relativePath: { regex: "/^[^/]+$/" }
            name: { regex: "/^[^/_]/" }
          }
          sort: { order: ASC, fields: [name] }
        ) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={(data) => <Navbar data={data} />}
  />
);

Navbar.propTypes = {
  data: PropTypes.shape({
    allDirectory: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
          }),
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};
