import React from 'react';
import axios from 'axios';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const RecentCommits = ({ styles: { ulStyle, liStyle, linkStyle, headerStyle } }) => {
  const [githubData, setGithubData] = React.useState([]);

  React.useEffect(() => {
    const loopdata = [];
    axios.get('https://api.github.com/orgs/icatproject/repos').then((reposResponse) => {
      const promises = [];
      for (let i = 0; i < reposResponse.data.length; i += 1) {
        const { name } = reposResponse.data[i];
        const promise = axios
          .get(`${reposResponse.data[i].url}/commits`)
          .then((commitsResponse) => {
            const object = {
              name,
              url: commitsResponse.data[0].html_url,
              date: commitsResponse.data[0].commit.committer.date,
            };
            loopdata.push(object);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(`Error ${error}`);
          });
        promises.push(promise);
      }
      Promise.all(promises).then(() => {
        setGithubData(
          loopdata.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })
        );
      });
    });
  }, []);

  return (
    <div>
      <nav aria-label="recent commits">
        <h5
          css={css`
            ${headerStyle}
          `}
        >
          Recent Commits
        </h5>
        <ul
          css={css`
            ${ulStyle}
          `}
        >
          {githubData.length > 0 ? (
            githubData.slice(0, 5).map((data) => (
              <li
                css={css`
                  ${liStyle}
                `}
                key={data.name}
              >
                <a
                  css={css`
                    ${linkStyle}
                  `}
                  href={data.url}
                >
                  {data.name}
                </a>
              </li>
            ))
          ) : (
            <li
              css={css`
                ${liStyle}
              `}
            >
              Loading...
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default RecentCommits;

RecentCommits.propTypes = {
  styles: PropTypes.shape({
    liStyle: PropTypes.shape({ styles: PropTypes.string }).isRequired,
    ulStyle: PropTypes.shape({ styles: PropTypes.string }).isRequired,
    linkStyle: PropTypes.shape({ styles: PropTypes.string }).isRequired,
    headerStyle: PropTypes.shape({ styles: PropTypes.string }).isRequired,
  }),
};

RecentCommits.defaultProps = {
  styles: {
    liStyle: {},
    ulStyle: {},
    linkStyle: {},
    headerStyle: {},
  },
};
