import { StaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.updateMediaQuery = this.updateMediaQuery.bind(this);
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    this.updateMediaQuery(mediaQuery);
    mediaQuery.addEventListener('change', this.updateMediaQuery);
  }

  handleBlur() {
    this.setState({ expanded: false });
  }

  handleFocus() {
    this.setState({ expanded: true });
  }

  updateMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
      this.setState({ mediaQuery: true });
    } else {
      this.setState({ mediaQuery: false });
    }
  }

  renderListItem(node, shouldRender) {
    const { menuExpanded } = this.props;
    const { mediaQuery } = this.state;
    if (shouldRender) {
      return (
        <li
          key={node.id}
          css={css`
            @media (min-width: 768px) {
              line-height: 12px;
            }
            line-height: 6px;
          `}
        >
          <Link
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            to={node.fields.slug}
            tabIndex={mediaQuery && !menuExpanded ? -1 : 0}
            css={css`
              color: white;
              text-decoration: none;
              display: block;
              padding: 12px 0.5rem;
              font-size: 11px;
              text-transform: uppercase;
              @media (min-width: 768px) {
                &:focus,
                &:hover {
                  background-color: #41a62a;
                }
              }
              @media (max-width: 768px) {
                padding: 0.5rem 2rem;
                text-align: left;
                &:hover,
                &:focus {
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

  render() {
    const { directoryName, data, menuExpanded } = this.props;
    const { expanded, mediaQuery } = this.state;
    const menuVisibiltyCSS = expanded
      ? css`
          left: inherit;
          top: inherit;
        `
      : css`
          top: -9999px;
          left: -9999px;
        `;
    return (
      <li
        onMouseEnter={this.handleFocus}
        onMouseLeave={this.handleBlur}
        css={css`
          float: left;
          background-color: black;
          @media (min-width: 768px) {
            &:hover,
            &:focus {
              background-color: #24890d;
            }
            margin-right: 1px;
            line-height: 2.5rem;
          }
          @media (max-width: 768px) {
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
          tabIndex={mediaQuery && !menuExpanded ? -1 : 0}
          aria-haspopup="true"
          css={css`
            text-decoration: none;
            display: block;
            color: white;
            padding: 0 0.5rem;
            text-transform: uppercase;
            font-size: 11px;
            @media (min-width: 768px) {
              &:hover,
              &:focus {
                background-color: #24890d;
              }
            }
            @media (max-width: 768px) {
              &:hover,
              &:focus {
                color: #24890d;
              }
            }
          `}
        >
          {directoryName.replace(/-/g, ' ')}
        </Link>
        <ul
          css={css`
            ${menuVisibiltyCSS}
            width: 10rem;
            list-style: none;
            padding: 0;
            margin: 0;
            background-color: #24890d;
            position: absolute;
            @media (max-width: 768px) {
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
          aria-label={`${directoryName.replace(/-/g, ' ')}-sub-menu`}
        >
          {data.allMarkdownRemark.edges.map(({ node }) =>
            this.renderListItem(
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

function DropdownQueryContainer({ directoryName, menuExpanded }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
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
      render={(data) => (
        <Dropdown directoryName={directoryName} data={data} menuExpanded={menuExpanded} />
      )}
    />
  );
}

export default DropdownQueryContainer;

DropdownQueryContainer.propTypes = {
  directoryName: PropTypes.string.isRequired,
  menuExpanded: PropTypes.bool.isRequired,
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
  menuExpanded: PropTypes.bool.isRequired,
};
