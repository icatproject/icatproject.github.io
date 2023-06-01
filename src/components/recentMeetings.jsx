import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

function RecentMeetings({ styles: { ulStyle, liStyle, linkStyle, headerStyle } }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
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
  `);
  return (
    <nav aria-label="recent meetings">
      <h5
        css={css`
          ${headerStyle}
        `}
      >
        Recent Meetings
      </h5>
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
  );
}

export default RecentMeetings;

RecentMeetings.propTypes = {
  styles: PropTypes.shape({
    liStyle: PropTypes.shape({ styles: PropTypes.string }).isRequired,
    ulStyle: PropTypes.shape({ styles: PropTypes.string }).isRequired,
    linkStyle: PropTypes.shape({ styles: PropTypes.string }).isRequired,
    headerStyle: PropTypes.shape({ styles: PropTypes.string }).isRequired,
  }),
};

RecentMeetings.defaultProps = {
  styles: {
    liStyle: {},
    ulStyle: {},
    linkStyle: {},
    headerStyle: {},
  },
};
