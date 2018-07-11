import React, { Component } from "react";
import ColorThief from "@mariotacke/color-thief";

class Run extends Component {
  runmethod() {
    let imagethere = document.getElementsByClassName("img");
    
    console.log(imagethere);
    let colorThief = new ColorThief();
    let tryThief = colorThief.getColor(imagethere[0]);
    console.log(tryThief);
    
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