import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import { Index } from 'elasticlunr';
import queryString from 'query-string';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const qs = queryString.parse(location.search);
    const { query } = qs;
    const results = this.search(query);
    this.setState({
      query,
      results,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.search !== prevState.query) {
      const qs = queryString.parse(nextProps.location.search);
      const { query } = qs;
      return { query };
    }
    return null;
  }

  getOrCreateIndex() {
    const { data } = this.props;
    return this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(data.siteSearchIndex.index);
  }

  search(query) {
    this.index = this.getOrCreateIndex();
    const results = this.index
      // Query the index with search string to get an [] of IDs
      .search(query, { expand: true })
      // Map over each ID and return the full document
      .map(({ ref }) => this.index.documentStore.getDoc(ref));

    return results;
  }

  render() {
    const { query, results } = this.state;
    return (
      <Layout>
        <SEO title="Search" keywords={[`search`, `ICAT`]} />
        <h1>{`Search Results for: ${query}`}</h1>
        {results.map(page => (
          <li key={page.slug}>
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
            <p>{page.excerpt}</p>
          </li>
        ))}
      </Layout>
    );
  }
}

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
