import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
refreshPage() {
    window.location.reload();
  }
  render() {
    return (
      <div className="header">
        <div>
          <h1>Wassily</h1>
          <Router>
          <nav><Link to="/" onClick={() => { this.refreshPage() }}>Home</Link></nav>
          </Router>
        </div>
      </div>
    )

  }
}

export default Header;