import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const data = useStaticQuery(detailsQuery);

  return data.site.siteMetadata;
};

function SEO({ title, description, location, keywords }) {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata();

  const seo = {
    title: `${title} | ${defaultTitle}` || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${location.pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="google-site-verification" content="9X6CrnxO5Y0COmvYo15fcva3BeU-Qd8XSu5xWV44EDM" />
      {keywords && <meta name="keywords" content={keywords.join(`, `)} />}
    </>
  );
}

SEO.defaultProps = {
  keywords: [],
  description: undefined,
};

SEO.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default SEO;
