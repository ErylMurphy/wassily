import React, { Component } from "react";
import ColorThief from "@mariotacke/color-thief";

class Run extends Component {
  runmethod() {
    let getImages = document.getElementsByClassName("img");
    
  //  let getAttribute = this.getImages.getAttribute("src");
    console.log(getImages);
    // let colorThief = new ColorThief();
    // let tryThief = colorThief.getColor(imagethere[0]);
    // console.log(tryThief);
    
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