import React, { Component } from "react";
import Palette from "react-palette";
import { getClosest, colors } from './color-names.js';
import CompAlbums from '../CompAlbums/CompAlbums';


class ShowAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchAlbums: [],
      albumImage: null,
      colorname: null,
    }
    this.getTheStyle = this.getTheStyle.bind(this);
  }

  getTheStyle() {
    const coloredButton = document.getElementById('coloredhead');
    const style = window.getComputedStyle(coloredButton, null).getPropertyValue("color");
    document.getElementById('output').innerHTML = style;
    let rgb = style;
    rgb = rgb.replace(/[^\d,]/g, '').split(',');
    const compcolor = {
      r: parseInt(rgb[0]),
      g: parseInt(rgb[1]),
      b: parseInt(rgb[2]),
    }
    const colorname = getClosest(compcolor, colors);
    this.setState({
      colorname: colorname,
    })
    console.log(colorname)
  }
  render() {
    return (
      <div className="show-album">
        <div>
          <Palette image={this.props.albumImage}>
            {palette => (
              <div style={{ color: palette.vibrant }}>
                <button style={{ backgroundColor: palette.vibrant }} id="output" onClick={this.getTheStyle}>See Similar Albums</button>
                <img id="coloredhead" src={this.props.albumImage} />
              </div>
            )}
          </Palette>
          {this.state.colorname && (
            <div className="show-comps">
              <CompAlbums colorname={this.state.colorname} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ShowAlbum;
