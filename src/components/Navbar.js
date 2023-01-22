
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="Home">Home</a>
                <a className="navbar-brand text-white" href="Page1">Page1</a>
                <a className="navbar-brand text-white" href="#">Log Out</a>
            </div>
       </nav>
    )
  }
}
