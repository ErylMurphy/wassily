import React, { Component } from "react";
import './TopAlbums.css'
import PasteImage from '../PasteImage/PasteImage';

class TopAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      albums: [],
      flag: false,
      urlArr: [],
      images : ''
    }
    // this.addUrl = this.addUrl.bind(this)
    this.search = this.search.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick(evt, index, albumImage) {
    const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
    fetch(baseURL, {
      method: 'GET'
    }).then(response => response.json())
    .then(json => {
      const images = json.image[2]['#text'];
      this.setState({
        albumImage: albumImage,
        index: index
      });
      console.log(this.state.images);
      console.log(this.state.index);
      console.log(this.state.albumImage);  
    })};
    
  search() {
      const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
      fetch(baseURL, {
        method: 'GET'
      }).then(response => response.json())
      .then(json => {
        const albums = json.topalbums['album'];
      this.setState({ 
        albums : albums,
        flag : true,
      });
    });
  }

  render() {
    const ham = [];
    return (
      <div className="body">
        <div className="form">
          <input type="text" className="form" placeholder="Enter Any Artist to See Albums" required onChange={event => this.setState({ query: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.search() }} />
        </div>
        <div className="topalbums">
          <h1>See all albums for {this.state.query}</h1>
            {this.state.flag ? <PasteImage /> : null}
            
          <ul>
            {
              this.state.albums.map(function (album, index, images) {
                const albumImage = album.image[2]['#text'];
                return (
                  <li className='albums' key={index} >
                    <img className="img" src={album.image[2]['#text']} onClick={(evt) => this.handleClick(evt, index, images)} onClick={() => {
                      ham.push(albumImage), console.log(ham)}} />
                </li>)
        }.bind(this))}
          </ul>
      </div>
      </div >
    )
  };
}

export default TopAlbums;