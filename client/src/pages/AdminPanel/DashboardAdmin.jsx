import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import "./AdminPanel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Card  from 'react-bootstrap/Card';
import { CardDeck } from "react-bootstrap";




class DashboardAdmin extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h3 className="judul">Selamat Datang, Administrator</h3>
        </div>
        <div className="kartu">

          <CardDeck>
       
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header align="center">Kelas</Card.Header>
    <Card.Body>
      <Card.Title>Total : </Card.Title>
      <Card.Text>
      <h1 align="center">0</h1> 
      </Card.Text>
              </Card.Body>
              <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  

  <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header align="center">Pengajar</Card.Header>
    <Card.Body>
      <Card.Title>Total : </Card.Title>
      <Card.Text>
  <h1 align="center">0</h1>   
      </Card.Text>
              </Card.Body>
              <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header align="center">Pelajar</Card.Header>
    <Card.Body>
      <Card.Title>Total :</Card.Title>
      <Card.Text>
      <h1 align="center">0</h1> 
      </Card.Text>
              </Card.Body>
              <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
            </Card>
            </CardDeck>
  
</div>
      </Fragment>
    );
  }
}
export default DashboardAdmin;
