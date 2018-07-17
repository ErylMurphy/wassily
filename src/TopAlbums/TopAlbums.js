import React, { Component } from "react";
import ShowAlbum from '../ShowAlbum/ShowAlbum';


class TopAlbums extends Component {
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
    this.handleClick = this.handleClick.bind(this);
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
      <div className="body">
        <div className="search-bar">
          <input type="text" className="form" placeholder="Enter An Artist" required onChange={event => this.setState({ query: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.search() }} />
        </div>
          <div className="topalbums">
            <div>
            </div>
            <div>{this.state.albumImage && <ShowAlbum albumImage={this.state.albumImage} />}</div>
            <ul onClick={this.toggleHidden.bind(this)}>
              {
                this.state.albums.map(function (album, index) {

                  const albumImage = album.image[2]['#text'];
                  return (
                    <li className='albums' key={index}>

                      <img className="img" src={album.image[2]['#text']} onClick={(evt) => this.handleClick(evt, index, albumImage)} />

                      <div>
                      </div>
                    </li>)
                }.bind(this))}
            </ul>{!this.state.isHidden}
          
        </div>
      </div>
    )
  };
}

export default TopAlbums;
