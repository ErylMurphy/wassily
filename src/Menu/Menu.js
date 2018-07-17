import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Menu.css';

class Menu extends Component {
  refreshPage() {
    window.location.reload();
  }
  render() {
    return (
      <div className="menu">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
            <Router>
              
          <ul id="menu">
              <Link to="/" onClick={() => { this.refreshPage() }}><li className="li">Home</li></Link>
              <Link to="/About"><li className="li">About</li></Link>
              <Link to="/Contact"><li className="li">Contact</li></Link>
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact Contact={Contact} />
          </ul>
            </Router>
        </div>
      </div>
    )

  }
}

export default Menu;