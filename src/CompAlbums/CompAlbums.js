import React, { Component } from "react";


class CompAlbums extends Component {
  render() {
    return (

      <div className="compalbums">
      <div className="compImage">
      <img src={this.props.album_image} />
      </div>
        <div className="colorname">
          <h3>{this.props.color_name}</h3>
        </div>
      </div>

    );
  }
}

export default CompAlbums;