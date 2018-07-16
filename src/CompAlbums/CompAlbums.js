import React, { Component } from "react";
import compalbumcolors from '../data/compalbumcolors.json';

//make an if statement for the json

class CompAlbums extends Component {
  constructor(props) {
    super(props)
    this.state = {
        albumimage: null,
    }
  }
  render() {
    const { colorname } = this.props;
    return (
     <ul>
      {
        compalbumcolors.map((compcolors) => {
          if (compcolors.color_name === colorname) {
          return <img src={compcolors.album_image} />
          }
        })
      }
      </ul>
    );
  }
}

export default CompAlbums;