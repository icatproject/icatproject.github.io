import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from './dropdown';

const Navbar = ({ data }) => (
  <nav
    css={css`
      float: right;
      margin: 0;
      height: inherit;
      @media (max-width: 600px) {
        &:hover ul {
          display: block;
        }
      }
    `}
  >
    <a
      css={css`
        display: none;
        width: 2.5rem;
        height: 2.5rem;
        text-align: center;
        color: white;
        line-height: 2.5rem;
        @media (max-width: 600px) {
          display: inline-block;
        }
        &:hover {
          background-color: #939393;
        }
      `}
      href="#"
    >
      <FontAwesomeIcon icon="bars" title="Menu" />
    </a>
    <ul
      css={css`
        padding: 0 0;
        list-style: none;
        display: inline;
        @media (max-width: 600px) {
          display: none;
          position: absolute;
          padding: 1px;
          background: #000;
          right: 0px;
          top: 1.5rem;
          width: 100%;
        }
      `}
    >
      {data.allDirectory.edges.map(({ node }) => (
        <Dropdown directoryName={node.name} key={node.id} />
      ))}
    </ul>
  </nav>
);

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
    render={data => <Navbar data={data} />}
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
