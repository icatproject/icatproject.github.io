import { StaticQuery, graphql, Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import { linkStyle, liStyle, ulStyle } from "./sidebar";

const RecentMeetings = () => (
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
      <div>
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
      </div>
    )}
  />
);

export default RecentMeetings;
