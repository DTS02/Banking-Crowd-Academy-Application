import React, { Component } from 'react';
import { Button, FormControl, Form } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Router>
                        <Navbar bg="white">
                            <Navbar.Brand href="/App">Banking Crowd Academy</Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Form inline>
                                    <input type="text" placeholder="Search.." name="search"/>
                                    <input type="button" class="btn-Search"/>
                                </Form>
                                <div className="margin-user">
                                    <p>Kamu Masuk Sebagai: 
                                        <span className="span-inline" style={{color: "#40A8C4"}}>Pengajar</span>
                                    </p>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="">
                            {/* uncoment dibawah ini dan masukan Url login */}
                            {/* <Route path="/Login" component={Login}/> */}
                        </div>
                    </Router>
                </Container>
            </div>
        )
    }
}


class HeaderHome extends Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}



export default Home;