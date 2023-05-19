import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import SEO from '../components/seo';

function DefaultTemplate({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <h1
        css={css`
          font-weight: 300;
          text-transform: uppercase;
          font-size: 33px;
        `}
      >
        {post.frontmatter.title}
      </h1>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}

export default DefaultTemplate;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

DefaultTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

// can't use proptypes with special Gatsby Head component, so just ignore
// eslint-disable-next-line react/prop-types
export function Head({ data, ...rest }) {
  return (
    <SEO
      // eslint-disable-next-line react/prop-types
      title={data.markdownRemark.frontmatter.title}
      keywords={[
        `ICAT`,
        `ICAT data`,
        `ICAT metadata`,
        `ICAT catalogue`,
        `ICAT catalog`,
        `data catalogue`,
        `data catalog`,
        `metadata catalogue`,
        `metadata catalog`,
        `ICAT project`,
        `ICAT software`,
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
