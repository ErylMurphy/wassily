import React, { Component } from "react";
import Palette from "react-palette";

class ShowAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchAlbums: [],
      albumImage : null,
    }
    this.getTheStyle = this.getTheStyle.bind(this);
  }
  
  getTheStyle() {
  const coloredButton = document.getElementById('coloredhead');
  console.log(coloredButton);
  const style = window.getComputedStyle(coloredButton, null).getPropertyValue("color");
  document.getElementById('output').innerHTML = style;
  let rgb = style;
  rgb = rgb.replace(/[^\d,]/g, '').split(',');
  const rgbObject = {
    r: parseInt(rgb[0]),
    g: parseInt(rgb[1]),
    b: parseInt(rgb[2]),
    
  }
  console.log(rgbObject)
}




  render() {
    return (
      <div className="show-album">
        <div>
          <Palette image={this.props.albumImage}>
            {palette => (
              <div style={{ color: palette.vibrant }}>
                <button style={{backgroundColor : palette.vibrant}} id="output" onClick={this.getTheStyle}>Hello</button>
             
                <img id="coloredhead" src={this.props.albumImage}/>
              </div>
            )}
          </Palette>

        </div>
      </div>
    )  
}
}

export default ShowAlbum;
