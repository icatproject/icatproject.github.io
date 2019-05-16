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
        for (let i = 0; i <5; i++) {
          const promise = axios.get(response.data[i].url + "/commits")
          .then(function (response) {
          
             loopdata.push(response.data[0].url)
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
      for (let i = 0; i < this.state.githubData.length; i++) {
      listitems.push(  <li>
        <a css={css`:visited {color: white}; :hover {color: green}; :link {color: white}; `} href={this.state.githubData[i]}>test</a>
        </li>)
       
      }

      return (
        <div>
          <p>Recent commits</p>
          <ul>
             
              {listitems}
          
          </ul>
        </div>

      )
      return <ul>this.state.githubData.
      
      
      
      </ul>
  }
}
export default Project