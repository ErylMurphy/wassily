import React, { Component } from "react";
import ColorThief from "@mariotacke/color-thief";

class Run extends Component {
  runmethod() {
    let getImages = document.getElementsByClassName("img");
    
    console.log(getImages);
    
  }
  render() {
    return (
      <div className="run">
      {this.runmethod()}
      </div>
    )
    
  }
}

export default Run;

