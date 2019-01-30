import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Index } from "elasticlunr";
import { graphql } from "gatsby";
import queryString from "query-string";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: []
    };
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.data.siteSearchIndex.index);

  search(query) {
    this.index = this.getOrCreateIndex();
    const results = this.index
      // Query the index with search string to get an [] of IDs
      .search(query, { expand: true })
      // Map over each ID and return the full document
      .map(({ ref }) => this.index.documentStore.getDoc(ref));

    return results;
  }

  componentDidMount() {
    const qs = queryString.parse(this.props.location.search);
    const query = qs.query;
    const results = this.search(query);
    this.setState({
      query: query,
      results: results
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.search !== prevState.query) {
      const qs = queryString.parse(nextProps.location.search);
      const query = qs.query;
      return { query: query };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      const qs = queryString.parse(this.props.location.search);
      const query = qs.query;
      const results = this.search(query);
      this.setState({
        query: query,
        results: results
      });
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Search" keywords={[`search`, `ICAT`]} />
        <h1>Search Results for: {this.state.query}</h1>
        {this.state.results.map(page => (
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
            <p>
              {page.content
                .split(" ")
                .slice(0, 55)
                .join(" ") + " ..."}
            </p>
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
