import React, { Component } from "react";



class AlbumSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ selectedIndex: event.target.value })
    const selectedAlbum = this.props.albums[event.target.value]
    this.props.setSelectedAlbum(selectedAlbum)
  }

  render() {

    const options = this.props.albums.map((album, index) => {
      return <option value={index} key={index}> {.show_title} </option>
    })

    return (
      <select id="albums" value={this.state.selectedIndex} onChange={this.handleChange}>
        {options}
      </select>
    )
  }
}

export default AlbumSelector;