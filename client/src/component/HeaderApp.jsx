import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";

const HeaderApp = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="white" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <strong>Banking Crowd Academy</strong>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown title={userInfo.userName} id="userName">
                   <LinkContainer to="/Dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Kelas">
                    <NavDropdown.Item>Kelas</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Profil">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
                  <LinkContainer to="/login">
                    <Nav.Link>Masuk</Nav.Link>
                  </LinkContainer>
                  <h3 style={{ color: "#40A8C4" }}>|</h3>
                  <LinkContainer to="/register ">
                    <Nav.Link>Daftar</Nav.Link>
                  </LinkContainer>
                </Nav>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/Home">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/kelolakelas">
                    <NavDropdown.Item>Kelas</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/kelolapengguna">
                    <NavDropdown.Item>Kelola Pengguna</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderApp;
