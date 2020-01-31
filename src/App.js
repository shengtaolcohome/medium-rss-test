import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    html: null,
  }

  componentDidMount() {
    return axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KonradDaWo')
      .then(res => {
        console.log("res is >>>", res);
        const item = res.data['items'][0];
        this.setState({ html: item.content });
      });
  }

  render() {
    console.log("this.state.html is >>>", this.state.html);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12" id="test" dangerouslySetInnerHTML={{__html: this.state.html}} />
        </div>
      </div>
    );
  }
  
}

export default App;
