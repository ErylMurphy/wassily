import React, { Component } from "react";


class CompAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      color_name: '',
      album_image: ''
    }
  }
  componentDidMount() {
    let id = this.props.id;
    let color_name = this.props.color_name;
    console.log(color_name)
    fetch(`/compalbums/${color_name}.json`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(compalbums => {
      console.log(compalbums)
      this.setState({
        compalbums: compalbums
      })
    })
  }
  render() {
    return (

      <div className="compalbums">
        <div className="compImage">
          <img src={this.props.album_image} />
        </div>
        <div className="colorname">
          <p>{this.props.color_name}</p>
        </div>
      </div>
    );
  }
}

export default CompAlbums;