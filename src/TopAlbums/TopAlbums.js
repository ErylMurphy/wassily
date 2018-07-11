import React, { Component } from "react";
import ColorThief from "@mariotacke/color-thief";
import Run from "./Run"

class TopAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      albums: [],
      topalbums: null,
      flag: false
    }
  }

  search() {
    console.log(this.state.query);
    const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
    console.log(baseURL);
    fetch(baseURL, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        console.log(json);
        const topalbums = json.topalbums['topalbums'];
        this.setState({ topalbums, flag : true });
        const albumURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
        console.log(albumURL);
        fetch(albumURL, {
          method: 'GET'
        }).then(response => response.json())
          .then(json => {
            console.log(json);
            const albums = json.topalbums['album'];
            this.setState({ albums });
            console.log(this.state.albums);
          });
      });
  }
  render() {
   
    return (

      <div className="body">

        <div className="form">
          <input type="text" className="form" placeholder="Enter Any Artist to See Albums" required onChange={event => this.setState({ query: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.search() }} />
        </div>
        <div className="artistname">
        </div>
        <div className="topalbums">
          <ul>
            {
              this.state.albums.map(function (album, index) {
                return <li className='albums' key={index}>
                  <a href={album.url}> <img className="img" src={album.image[2]['#text']} /></a>
                </li>;
              })}
          </ul>
          {this.state.flag ? <Run /> : null }
              
        </div>
      </div>
    )
  };
}

export default TopAlbums;