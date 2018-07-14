import React, { Component } from "react";
import TopAlbums from '../TopAlbums/TopAlbums';
import Palette from "react-palette";

class ShowAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchAlbums: [],
      albumImage : null,
    }
  }
  
  render() {
    function getTheStyle(){
    const coloredHead = document.getElementsByClassName('.coloredhead');
    const style = window.getComputedStyle(coloredHead, null).getPropertyValue("color");
    document.getElementsByClassName('.output').innerHTML = style;
    }
    console.log(this.props)
    return (
      <div className="show-album">
        <div>
          <Palette image={this.props.albumImage}>
            {palette => (
              <div style={{ color: palette.vibrant }}>
                <h1 className="coloredhead">Vibrant Color</h1>
                <div className="output">Hello</div>
                <img src={this.props.albumImage}/>
                {/* {console.log(style)} */}
              </div>
            )}
          </Palette>

        </div>
      </div>
    )  
}
}

export default ShowAlbum;
