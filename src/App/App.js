import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js'
import TopAlbums from '../TopAlbums/TopAlbums';
// import AllComps from '../AllComps/AllComps';
// import CompAlbums from '../CompAlbums/CompAlbums';
// import Home from '../Home/Home';
// import ShowAlbum from '../ShowAlbum/ShowAlbum';
// import GetColor from '../GetColor/GetColor';

class App extends Component {
   //set state in app for image url 
render() {
  return (
  <div>
  <Header />
  {/* <Home /> */}
  <TopAlbums />
  {/* <AllComps /> */}
  {/* <CompAlbums /> */}
  <Footer />
  </div>
  )
}
};

export default App;
