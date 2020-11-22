import React, { Component, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Gambar from "../../assets/banner.png";
import Carousel from "react-bootstrap/Carousel";
import Gbr from "../../assets/card2.png";
import Card from "react-bootstrap/Card";
import { Form, Nav, FormControl, Button, CardDeck } from "react-bootstrap";
import "./DetailKelas.css";
import "bootstrap/dist/css/bootstrap.min.css";
class DetailKelas extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Banking Crowd Academy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Dashboard</Nav.Link>
                <Nav.Link href="#Kelas">Kelas</Nav.Link>
                <Nav.Link href="#link">Profil</Nav.Link>
                <Nav.Link href="#link">Portofolio</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Pilik Topik"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar}
                width="100%"
                alt="gambar"
              />
              <Carousel.Caption>
                <div className="judul">
                  Selamat Datang
                  <br /> Di Kelas Desain Grafis
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <h4>Kamu mau pilih topik : </h4>
        <div className="pilihtopik">
          <Button variant="outline-primary">UI/UX Design</Button>{" "}
          <Button variant="outline-secondary">Ilustration Design</Button>{" "}
          <Button variant="outline-success">Photo Editing</Button>
          <Button variant="outline-secondary">Video Editing</Button>{" "}<hr></hr>
          <h4>Jadwal Kelas: </h4>
          <Button variant="outline-primary">Senin : 08.00-11.00</Button>{" "}
          
          <hr></hr>
        </div>
        <h4>Artikel yang tersedia</h4>
        <div className="kartuArtikel">
          <CardDeck>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Gbr} width="" />
              <Card.Body>
                <Card.Title>Trend UI/UX Design 2020</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus accusamus ad porro
                </Card.Text>
                <Button variant="primary">Baca</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Gbr} width="" />
              <Card.Body>
                <Card.Title>Trend U/UX Design 2020</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus accusamus ad porro
                </Card.Text>
                <Button variant="primary" >Baca</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Gbr} width="" />
              <Card.Body>
                <Card.Title>Trend U/UX Design 2020</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus accusamus ad porro
                </Card.Text>
                <Button variant="primary">Baca</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Gbr} width="" />
              <Card.Body>
                <Card.Title>Trend U/UX Design 2020</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus accusamus ad porro
                </Card.Text>
                <Button variant="primary">Baca</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </Fragment>
    );
  }
}

export default DetailKelas;
