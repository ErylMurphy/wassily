import React, { Component } from "react";
import Palette from "react-palette";



class GetColor extends Component {

  render() {
    const getColor = this.props.getColor
    return (
      <div>
        <Palette image={"https://lastfm-img2.akamaized.net/i/u/174s/f78e87f3ecef4a4b81ec7285ae9882c0.png"}>
          {palette => (
            <div style={{ color: palette.vibrant }}>
              Text with the vibrant color
             </div>
          )}
        </Palette>
        </div>
    )
  }
}

export default GetColor;