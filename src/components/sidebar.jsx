import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import RecentMeetings from './recentMeetings';
import Searchbar from './searchbar';
import RecentCommits from './recentCommits';

export const linkStyle = css`
  text-decoration: none;
  color: white;
  &:hover {
    color: green;
  }
`;

export const liStyle = css`
  margin-bottom: 5px;
`;

export const ulStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 11px;
`;

export const headerStyle = css`
  margin: 12px 0;
`;

export function Sidebar() {
  return (
    <div
      css={css`
        background-color: black;
        color: white;
        width: 175px;
        float: left;
        margin-top: 2rem;
        margin-bottom: -100%;
        min-height: 100vh;
        position: fixed;
        z-index: 3;
        padding-left: 10px;
        @media only screen and (max-width: 768px) {
          display: none;
        }
      `}
    >
      <form
        name="sidebar search form"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h5
          css={css`
            ${headerStyle}
          `}
        >
          Search
        </h5>
        <Searchbar
          id="sidebar-search"
          inputCSS={css`
            width: 90%;
          `}
        />
      </form>
      <RecentMeetings styles={{ linkStyle, liStyle, ulStyle, headerStyle }} />
      <nav aria-label="quick links">
        <h5
          css={css`
            ${headerStyle}
          `}
        >
          Links
        </h5>
        <ul
          css={css`
            ${ulStyle}
          `}
        >
          <li
            css={css`
              ${liStyle}
            `}
          >
            <a
              css={css`
                ${linkStyle}
              `}
              href="http://groups.google.com/group/icatgroup"
            >
              icatgroup
            </a>
          </li>
          <li
            css={css`
              ${liStyle}
            `}
          >
            <a
              css={css`
                ${linkStyle}
              `}
              href="https://repo.icatproject.org/"
            >
              repo.icatproject.org
            </a>
          </li>
          <li
            css={css`
              ${liStyle}
            `}
          >
            <Link
              to="/about/useful-links"
              css={css`
                ${linkStyle}
              `}
            >
              Useful Links
            </Link>
          </li>
          <li
            css={css`
              ${liStyle}
            `}
          >
            <a
              css={css`
                ${linkStyle}
              `}
              href="https://github.com/icatproject"
            >
              Github for icatproject
            </a>
          </li>
          <li
            css={css`
              ${liStyle}
            `}
          >
            <a
              css={css`
                ${linkStyle}
              `}
              href="https://github.com/icatproject-contrib"
            >
              Github for icatproject-contrib
            </a>
          </li>
        </ul>
      </nav>
      <RecentCommits styles={{ linkStyle, liStyle, ulStyle, headerStyle }} />
    </div>
  );
}
