import React, { Component } from 'react';
// import CompAlbums from '../CompAlbums/CompAlbums';

class AllComps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compalbums: [],
      color_name: '',
      album_image: ''
    };
  }
  componentDidMount() {
    fetch('/compalbums.json')
      .then(response => response.json())
      .then(compalbums => {
        const compalbums = compalbums;
        this.setState({
          compalbums: compalbums,
          color_name: color_name,
          album_image: album_image
        });
      });
      console.log(this.state.compalbums);
  }

  render() {
    const color_name = compalbums.color_name;
    return (

      <div className="all-comps">
          <ul>
      {this.state.compalbums.map((compalbums, id) => {
        return(
         <li className="compalbums" key={id}>
         <p>{this.props.color_name}</p>
         </li>
       )
      })} 
          </ul>
      </div>
    );
  }
  }

  export default AllComps;
