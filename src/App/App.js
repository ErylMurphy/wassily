import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js'
import TopAlbums from '../TopAlbums/TopAlbums';

class App extends Component {
render() {
  return (
  <div>
  <Header />
  <TopAlbums />
  <Footer />
  </div>
  )
}
};

export default App;




// import SpotifyWebApi from 'spotify-web-api-node';
// const spotifyApi = new SpotifyWebApi();

// class App extends Component {
//   constructor() {
//     super();
//     const params = this.getHashParams();
//     const token = params.access_token;
//     if (token) {
//       spotifyApi.setAccessToken(token);
//     }
//     this.state = {
//       loggedIn: token ? true : false,
//       nowPlaying: { name: 'Not Checked', albumArt: '' }
//     }
//   }
//   getHashParams() {
//     var hashParams = {};
//     var e, r = /([^&;=]+)=?([^&;]*)/g,
//       q = window.location.hash.substring(1);
//     e = r.exec(q)
//     while (e) {
//       hashParams[e[1]] = decodeURIComponent(e[2]);
//       e = r.exec(q);
//     }
//     return hashParams;
//   }

//   getNowPlaying() {
//     spotifyApi.getMyCurrentPlaybackState()
//       .then((response) => {
//         this.setState({
//           nowPlaying: {
//             name: response.item.name,
//             albumArt: response.item.album.images[0].url
//           }
//         });
//       })
//   }
//   render() {
//     return (
//       <div className="App">
//         <a href='http://localhost:8888' > Login to Spotify </a>
//         <div>
//           Now Playing: {this.state.nowPlaying.name}
//         </div>
//         <div>
//           <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
//         </div>
//         {this.state.loggedIn &&
//           <button onClick={() => this.getNowPlaying()}>
//             Check Now Playing
//           </button>
//         }
//       </div>
//     );
//   }
// }

// export default App;




// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: '',
//       artist: null,
//       albums: [],
//     }
//   }

//   search() {
//     console.log(this.state.query);
//     const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
//     console.log(baseURL);
//     fetch(baseURL, {
//       method: 'GET'
//     }).then(response => response.json())
//       .then(json => {
//         console.log(json);
//         const topalbums = json.topalbums['topalbums'];
//         this.setState({ topalbums });
//         const albumURL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.query}&api_key=750edfe3fb22652664ad82d8e4e9cd8b&format=json`;
//         console.log(albumURL);
//         fetch(albumURL, {
//           method: 'GET'
//         }).then(response => response.json())
//           .then(json => {
//             console.log(json);
//             const albums = json.topalbums['album'];
//             this.setState({ albums });
//             console.log(this.state.albums);
//           });
//       });
//   }
//   render() {
//     return (

//       <div className="body">
//         <Header />

//         <div className="form">
//           <input type="text" className="form" placeholder="Enter Any Artist to See Albums" required onChange={event => this.setState({ query: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.search() }} />
//         </div>

//         <div className="artistname">
//         </div>
//         <div className="topalbums">
//           <ul>
//             {
//               this.state.albums.map(function (album, index) {
//                 return <li className='albums' key={index}>
//                   <a href={album.url}> <img className="img" src={album.image[2]['#text']} alt={album.name}/></a>
//                 </li>;
//               })}
//           </ul>
//         </div>
//       </div>
//     )
//   };
// };

// export default App;
