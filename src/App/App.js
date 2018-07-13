import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js'
import TopAlbums from '../TopAlbums/TopAlbums';
// import GetColor from '../GetColor/GetColor';

class App extends Component {
   //set state in app for image url 
render() {
  return (
  <div>
  <Header />
  {/* <GetColor /> */}
  <TopAlbums />
  {/* <TopAlbums handleAlbum={this.}/> */}
  <Footer />
  </div>
  )
}
};

export default App;
