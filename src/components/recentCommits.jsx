import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

/**
 * Gets the most recent commit to the given repo if it exists, otherwise null
 *
 * @param repo a repository object from the github API
 * @returns {Promise<Response>} an object representing the most recent commit
 * in the repo if it exists, with the fields 'name', 'url', and 'date', otherwise
 * null
 */
async function fetchRepoMostRecentCommit(repo) {
  const commitUrl = repo.commits_url;
  // Cut off '{/sha}' at the end of the commits url
  const parts = commitUrl.split('{');
  return fetch(parts[0])
    .then(async (commitsResponse) => {
      const commitsData = await commitsResponse.json();

      if (commitsData.length === 0) return null;

      const mostRecent = commitsData[0];
      return {
        name: repo.name,
        url: mostRecent.html_url,
        date: mostRecent.commit.author.date,
      };
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.warn(`Error ${error}`);
      return null;
    });
}

/**
 * Fetches the most recent commits for all the repos in the icatproject
 * github organisation
 *
 * Note that this uses unauthenticated requests to the github API, which are
 * strictly rate limited, and therefore should not be called often.
 * @returns {Promise<*[]>}
 */
async function fetchRecentCommits() {
  const commits = [];
  await fetch('https://api.github.com/orgs/icatproject/repos?sort=updated')
    .then(async (reposResponse) => {
      const reposData = await reposResponse.json();
      const promises = reposData.map((repo) =>
        fetchRepoMostRecentCommit(repo)
          .then((commit) => {
            if (commit !== null) commits.push(commit);
          })
          .catch(() =>
            // eslint-disable-next-line no-console
            console.warn(`Failed to retrieve commit for ${repo}`)
          )
      );
      await Promise.all(promises);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.warn(`Error ${error}`);
      return [];
    });
  return commits;
}

const hourInMillis = 60 * 60 * 1000;
function isStillRecent(date) {
  return new Date().valueOf() - date.valueOf() < hourInMillis;
}
/**
 * Loads and displays links to the most recent commits in icatproject repos
 */
function RecentCommits({ styles: { ulStyle, liStyle, linkStyle, headerStyle } }) {
  const [githubData, setGithubData] = React.useState(null);

  /*
  Unauthenticated requests to the github API are rate limited to 60 per hour.
  To avoid this, we cache results in local storage and only refetch from github
  at most once per hour.
  */
  React.useEffect(() => {
    async function loadRecentCommits() {
      const serializedLastFetchTime = localStorage.getItem('recentCommitsFetchTime');
      const serializedRecents = localStorage.getItem('recentCommits');

      const cacheIsValid =
        serializedLastFetchTime !== null &&
        serializedRecents !== null &&
        isStillRecent(new Date(serializedLastFetchTime));

      if (cacheIsValid) {
        setGithubData(JSON.parse(serializedRecents));
      } else {
        const recents = await fetchRecentCommits();
        recents.sort((a, b) => new Date(b.date) - new Date(a.date));
        localStorage.setItem('recentCommits', JSON.stringify(recents));
        localStorage.setItem('recentCommitsFetchTime', new Date());
        setGithubData(recents);
      }
    }

    loadRecentCommits();
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
          {githubData === null ? (
            <li
              css={css`
                ${liStyle}
              `}
            >
              Loading...
            </li>
          ) : (
            githubData.slice(0, 10).map((data) => (
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
          )}
        </ul>
      </nav>
    </div>
  );
}

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
