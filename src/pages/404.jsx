import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Searchbar from '../components/searchbar';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>It looks like nothing was found at this location. Maybe try a search?</p>
    <Searchbar
      inputCSS={css`
        width: 300px;
      `}
    />
  </Layout>
);

export default NotFoundPage;
