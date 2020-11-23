import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import "./AdminPanel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar className="Navbar" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Kelola Kelas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Kelola Pengguna
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
