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
          <h1>Wassily</h1>
        </div>
    )
  }
}

export default Header;