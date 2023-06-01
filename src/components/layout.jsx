import React from 'react';
import 'normalize.css';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import Header from './header';
import { Sidebar } from './sidebar';
import './layout.css';

library.add(faSearch);
library.add(faBars);

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          margin: 0;
        `}
      >
        <Sidebar />
        <main
          id="content"
          css={css`
            margin-top: 70px;
            margin-left: 300px;
            margin-bottom: 1.5em;
            margin-right: 100px;
            float: left;
            @media only screen and (max-width: 768px) {
              margin-right: 10px;
              margin-left: 10px;
            }
          `}
        >
          {children}
        </main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
