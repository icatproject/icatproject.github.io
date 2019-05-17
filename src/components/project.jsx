import React from 'react';
import axios from 'axios';
import { css } from '@emotion/core';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        githubData: []
    }
  }

  componentWillMount() {
    var loopdata = []
    axios.get("http://api.github.com/orgs/icatproject/repos")
    .then(response => {
      const promises = []
        for (let i = 0; i <response.data.length; i++) { const name = response.data[i].name
          const promise = axios.get(response.data[i].url + "/commits")
          .then(function (response) {
          const object = {name: name, url: response.data[0].html_url }
             loopdata.push(object)
          }).catch(function(error){
            console.log("error" + error);
          })
          promises.push(promise)
        }
Promise.all(promises).then(values => {
        this.setState({ githubData: loopdata })
})
      })
  }

  render() {
      console.log(this.state.githubData)
      const listitems = []
      if (this.state.githubData.length !== 0){for (let i = 0; i < 5; i++) {
      listitems.push(  <li>
        <a css={css`text-decoration: none; :visited {color: white}; :hover {color: green}; :link {color: white}; font-size: 12px;`} href={this.state.githubData[i].url}>{this.state.githubData[i].name}</a>
        </li>)
       
      }
    }
      return (
        <div>
           <nav aria-label="recent commits">
           <h5>Recent Commits</h5>
          <ul css={css`
              list-style-type: none;
              margin: 0;
              padding:0;`
            }>
             
              {listitems}
          
          </ul>
          </nav>
        </div>

      )
      return <ul>this.state.githubData.
      
      
      
      </ul>
  }
}
export default Project