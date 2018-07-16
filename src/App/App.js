import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js'
import TopAlbums from '../TopAlbums/TopAlbums';


class App extends Component {
   //set state in app for image url 
render() {
  return (
  <div>
    <div className="headtop">
  <Header />
  <TopAlbums />
  </div>
  <Footer />
  </div>
  )
}
};

export default App;
