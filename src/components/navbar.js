import { StaticQuery, graphql } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import Dropdown from "./dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
  render() {
    return (
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
          {this.props.data.allDirectory.edges.map(({ node }) => (
            <Dropdown directoryNode={node} key={node.id} />
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
    render={data => <Navbar data={data} />}
  />
);
