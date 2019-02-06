import { StaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

function renderListItem(node, shouldRender) {
  if (shouldRender) {
    return (
      <li
        key={node.id}
        css={css`
          @media (min-width: 600px) {
            &:hover {
              background-color: #41a62a;
            }
            line-height: 12px;
          }
          line-height: 6px;
        `}
      >
        <Link
          to={node.fields.slug}
          css={css`
            color: white;
            text-decoration: none;
            display: block;
            padding: 12px 0.5rem;
            font-size: 11px;
            text-transform: uppercase;
            @media (max-width: 600px) {
              padding: 0.5rem 2rem;
              text-align: left;
              &:hover {
                color: #24890d;
              }
            }
          `}
        >
          {node.frontmatter.title}
        </Link>
      </li>
    );
  }
  return null;
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleBlur() {
    this.setState({ expanded: false });
  }

  handleFocus() {
    this.setState({ expanded: true });
  }

  render() {
    const { directoryName, data } = this.props;
    return (
      <li
        onMouseEnter={this.handleFocus}
        onMouseLeave={this.handleBlur}
        css={css`
          float: left;
          background-color: black;
          @media (min-width: 600px) {
            &:hover {
              background-color: #24890d;
            }
            &:hover ul {
              display: block;
            }
            margin-right: 1px;
            line-height: 2.5rem;
          }
          @media (max-width: 600px) {
            text-align: left;
            width: 100%;
            margin: 0;
            line-height: 1rem;
          }
        `}
      >
        <Link
          to={`/${directoryName}`}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          css={css`
            text-decoration: none;
            display: block;
            color: white;
            padding: 0 0.5rem;
            text-transform: uppercase;
            font-size: 11px;
            &:focus + ul {
              display: block;
            }
            @media (max-width: 600px) {
              &:hover {
                color: #24890d;
              }
            }
          `}
        >
          {directoryName.replace(/-/g, ' ')}
        </Link>
        <ul
          css={css`
            width: 10rem;
            list-style: none;
            padding: 0;
            margin: 0;
            background-color: #24890d;
            position: absolute;
            display: none;
            @media (max-width: 600px) {
              background-color: black;
              position: static;
              display: block;
              text-align: center;
              width: 100%;
              padding: 10px 0;
              margin: 0;
              line-height: 1rem;
            }
          `}
        >
          {data.allMarkdownRemark.edges.map(({ node }) =>
            renderListItem(
              node,
              // we don't want index.md files as dropdown list items
              // we also only want files that are direct children of the directory
              // or are index.md files of sub directories
              !node.fileAbsolutePath.includes(`${directoryName}/index.md`) &&
                (node.fileAbsolutePath.includes(
                  `${directoryName}/${node.fileAbsolutePath.split('/').pop()}`
                ) ||
                  node.fileAbsolutePath.search(new RegExp(`/${directoryName}/[^/]+/index.md`)) !==
                    -1)
            )
          )}
        </ul>
      </li>
    );
  }
}

const DropdownQueryContainer = ({ directoryName }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
              fileAbsolutePath
            }
          }
        }
      }
    `}
    render={data => <Dropdown directoryName={directoryName} data={data} />}
  />
);

export default DropdownQueryContainer;

DropdownQueryContainer.propTypes = {
  directoryName: PropTypes.string.isRequired,
};

Dropdown.propTypes = {
  directoryName: PropTypes.string.isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
            fields: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
            fileAbsolutePath: PropTypes.string.isRequired,
          }),
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};
