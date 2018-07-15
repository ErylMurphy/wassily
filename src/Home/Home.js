import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      albums: [],
      flag: false,
      albumImage: '',
      showComponent: false,
      isHidden: true,
    }
    this.search = this.search.bind(this);
  }

  search() {
    const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
    fetch(baseURL, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        const albums = json.topalbums['album'];
        this.setState({
          albums: albums,
          flag: true,
        });
      });
  }

  render() {
    return (
      <div className="home-page">
          <input type="text" className="form" placeholder="Enter Any Artist to See Albums" required onChange={event => this.setState({ query: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.search() }} />
          <button className="home-search">Find Albums</button>
      </div>
    )

  }
}

export default Home;