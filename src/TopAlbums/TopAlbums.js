import React, { Component } from "react";
// import ColorThief from "@mariotacke/color-thief";
// import Run from "./Run"
import './TopAlbums.css'

class TopAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      albums: [],
      topalbums: [],
      flag: false,
      urlArr: [],
    }
    // this.addUrl = this.addUrl.bind(this)
    this.search = this.search.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
componentWillMount() {
  console.log("component will mount");
}
componentDidMount() {
  console.log("component did mount");
}
handleClick() {
  console.log("im a button");
}


  search() {
    const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
    fetch(baseURL, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        console.log(json);
        const topalbums = json.topalbums['topalbums'];
        this.setState({ 
          topalbums, 
          flag: true 
        });
            const albums = json.topalbums['album'];
            this.setState({ 
              albums : albums 
            });
            console.log(this.state.albums);
      });
  }
  render() {
    return (
      <div className="body">
        <div className="form">
          <input type="text" className="form" placeholder="Enter Any Artist to See Albums" required onChange={event => this.setState({ query: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.search() }} />
        </div>
        <div className="topalbums">
          <h1 >See all albums for {this.state.query}</h1>
          <ul>
            {
              this.state.albums.map(function (album, index) {
                const albumImage = album.image[2]['#text'];
                return (
                <li className='albums' key={index}>
                   <img className="img" src={album.image[2]['#text']}  onClick={this.handleClick} />
                </li>)
        }.bind(this))}
          </ul>
        {/* {this.state.flag ? <Run /> : null} */}
      </div>
      </div >
    )
  };
}

export default TopAlbums;