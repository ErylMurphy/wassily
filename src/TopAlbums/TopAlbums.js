import React, { Component } from "react";
import './TopAlbums.css';
// import GetColor from '../GetColor/GetColor';
import PasteImage from '../PasteImage/PasteImage';
import Palette from "react-palette";

class TopAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      albums: [],
      flag: false,
      albumImage: '',
      showComponent: false,
      isHidden: true
    }
    this.search = this.search.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  handleClick(evt, index, albumImage) {
    const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
    fetch(baseURL, {
      method: 'GET'
    }).then(response => response.json())
    .then(json => {
      this.setState({
        index: index,
        albumImage: albumImage,
      });
      console.log(this.state.albumImage);
    })
  };
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
    })
  }
  search() {
    const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
    fetch(baseURL, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        console.log(json)
        const albums = json.topalbums['album'];
        this.setState({
          albums: albums,
          flag: true,
        });
      });
  }

  render() {
    return (
      <div className="body">
        <div className="form">
          <input type="text" className="form" placeholder="Enter Any Artist to See Albums" required onChange={event => this.setState({ query: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.search() }} />
          <div className="topalbums">
            <div>
              <Palette image={this.state.albumImage}>
                {palette => (
                  <div style={{ color: palette.vibrant }}>
                    <button onClick={this.toggleHidden.bind(this)}>See all albums for {this.state.query}</button>
                    {!this.state.isHidden && <PasteImage />}
                  </div> 
                )}
              </Palette>
            </div>
            <ul>
              {
                this.state.albums.map(function (album, index) {
                  const albumImage = album.image[2]['#text'];
                  return (
                    <li className='albums' key={index} >
                      <img className="img" src={album.image[2]['#text']} onClick={(evt) => this.handleClick(evt, index, albumImage)} />
                    </li>)
                }.bind(this))}
            </ul>
          </div>
        </div>
      </div>
    )
  };
}

export default TopAlbums;
