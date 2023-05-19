import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import { Index } from 'elasticlunr';
import SEO from '../components/seo';

function search(index, query) {
  const results = index
    // Query the index with search string to get an [] of IDs
    .search(query, { expand: true })
    // Map over each ID and return the full document
    .map(({ ref }) => index.documentStore.getDoc(ref));

  return results;
}

function SearchPage(props) {
  const { location, data } = props;
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  // Create an elastic lunr index and hydrate with graphql query results
  const index = React.useMemo(
    () => Index.load(data.siteSearchIndex.index),
    [data.siteSearchIndex.index]
  );
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    setResults(search(index, query));
  }, [index, query]);

  return (
    <>
      <h1>{`Search Results for: ${query}`}</h1>
      {results.map((page) => (
        <article key={page.slug}>
          <h2>
            <Link
              css={css`
                color: green;
              `}
              to={page.slug}
            >
              {page.title}
            </Link>
          </h2>
          <p>
            {page.excerpt}{' '}
            <Link
              css={css`
                color: green;
              `}
              to={page.slug}
            >
              Continue reading →
            </Link>
          </p>
        </article>
      ))}
    </>
  );
}

export default SearchPage;

export const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`;

SearchPage.propTypes = {
  data: PropTypes.shape({
    siteSearchIndex: PropTypes.shape({
      index: PropTypes.shape({ documentStore: PropTypes.shape({}).isRequired }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export function Head(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SEO title="Search" keywords={[`search`, `ICAT`]} {...props} />;
}
