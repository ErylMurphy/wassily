import React, { Component } from "react";
import compalbums from '..data/compalbumcolors'

class CompAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      color_name: '',
      album_image: ''
    }
  }

  render() {
    return (

      <div className="compalbums">
        <div className="compImage">
          <img src={this.props.album_image} />
        </div>
        <div className="colorname">
          <p>{this.props.color_name}</p>
        </div>
      </div>
    );
  }
}

export default CompAlbums;