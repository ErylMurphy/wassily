import React, { Component } from "react";
import compalbumcolors from '../data/compalbumcolors.json';
import './CompAlbums.css';

//make an if statement for the json

class CompAlbums extends Component {
  refreshPage() {
    window.location.reload();
  }
  constructor(props) {
    super(props)
    this.state = {
        albumimage: null,
    }
    
  }
  render() {
    const { colorname } = this.props;
    return (
      <div className="compimages">
        <button id="refresh" onClick={() => { this.refreshPage() }}>New Search</button>

      <h1>COMPS</h1>
     <ul>
      {
        compalbumcolors.map((compcolors) => {
          if (compcolors.color_name === colorname) {
          return <img src={compcolors.album_image} />
          }
        })
      }
      </ul>
      </div>
    );
  }
}

export default CompAlbums;