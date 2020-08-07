import React from 'react';
import axios from 'axios';
import { css } from '@emotion/core';

class recentCommits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      githubData: [],
    };
  }

  componentDidMount() {
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
        this.setState({
          githubData: loopdata.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          }),
        });
      });
    });
  }

  render() {
    const { githubData } = this.state;
    const listitems = [];
    if (githubData.length !== 0) {
      for (let i = 0; i < 5; i += 1) {
        listitems.push(
          <li>
            <a
              css={css`text-decoration: none; :visited {color: white}; :link {color white}; :hover {color: green}; font-size: 12px;`}
              href={githubData[i].url}
            >
              {githubData[i].name}
            </a>
          </li>
        );
      }
    }
    return (
      <div>
        <nav aria-label="recent commits">
          <h5>Recent Commits</h5>
          <ul
            css={css`
              list-style-type: none;
              margin: 0;
              padding: 0;
            `}
          >
            {listitems.length > 0 ? listitems : <li>Loading...</li>}
          </ul>
        </nav>
      </div>
    );
  }
}
export default recentCommits;
