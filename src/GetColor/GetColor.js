import React, { Component } from "react";
import Palette from "react-palette";



class GetColor extends Component {

  render() {
    const getColor = this.props.getColor
    return (
      <div>
        <Palette image="">
          {palette => (
            <div style={{ color: palette.lightMuted }}>
              Text with the vibrant color
             </div>
          )}
        </Palette>
        </div>
    )
  }
}

export default GetColor;