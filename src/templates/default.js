import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import SEO from "../components/seo";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title="Search" keywords={[`ICAT`]} />
      <header>
        <h1
          css={css`
            font-weight: 300;
            text-transform: uppercase;
            font-size: 33px;
          `}
        >
          {post.frontmatter.title}
        </h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
