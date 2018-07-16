import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
refreshPage() {
    window.location.reload();
  }
  render() {
    return (
      <div className="header">
        <div id="menuToggle">
          <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
    <ul id="menu">
    <Router>
      <Link to="/" onClick={() => { this.refreshPage() }}><li>Home</li></Link>
      </Router>
    </ul>
  </div>
        <div>
          <h1>Wassily</h1>
        </div>
      </div>
    )

  }
}

export default Header;