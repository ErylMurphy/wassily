import React, { Component } from 'react';
import CompAlbums from '../CompAlbums/CompAlbums';

class AllComps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compalbums: []
    };
  }
  componentDidMount() {
    fetch('/compalbums.json')
      .then(response => response.json())
      .then(compalbums => {
        this.setState({
          compalbums: compalbums,
        });
      });
  }

  render() {
    return (
      <div className="all-comps">
      {this.state.compalbums.map((compalbum) => {
        return <CompAlbums />
      })} 
      </div>
    );
  }
  }

  export default AllComps;
