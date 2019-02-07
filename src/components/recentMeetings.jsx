import { StaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const RecentMeetings = ({ styles: { ulStyle, liStyle, linkStyle } }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            fileAbsolutePath: {
              regex: "/(collaboration)/(communication)/(monthly-meetings)/((?!index).)*[.]md$/"
            }
          }
          limit: 5
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "Do MMMM YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav aria-label="recent meetings">
        <h5>Recent Meetings</h5>
        <ul
          css={css`
            ${ulStyle}
          `}
        >
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li
              key={node.id}
              css={css`
                ${liStyle}
              `}
            >
              <Link
                css={css`
                  ${linkStyle}
                `}
                to={node.fields.slug}
              >
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  />
);

export default RecentMeetings;

RecentMeetings.propTypes = {
  styles: PropTypes.shape({
    liStyle: PropTypes.objectOf(PropTypes.string).isRequired,
    ulStyle: PropTypes.objectOf(PropTypes.string).isRequired,
    linkStyle: PropTypes.objectOf(PropTypes.string).isRequired,
  }),
};

RecentMeetings.defaultProps = {
  styles: {
    liStyle: {},
    ulStyle: {},
    linkStyle: {},
  },
};
