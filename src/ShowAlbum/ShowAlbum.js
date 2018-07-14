import React, { Component } from "react";
import TopAlbums from '../TopAlbums/TopAlbums';


class ShowAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchAlbums: [],
      albumImage : ''
    }
  }
  
  render() {

    console.log(this.props)
    return (
      <div className="show-album">
        <img src={this.props.albumImage} style={{border : '20px red solid'}}/>
      </div>
    )  
}
}

export default ShowAlbum;
