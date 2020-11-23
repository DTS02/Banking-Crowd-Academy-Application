import React, { useState, Fragment } from "react";

import Tabs from "react-bootstrap/Tabs";
import Cards from "../Home/Cards";

import Navbar from "react-bootstrap/Navbar";
import Gambar from "../../assets/banner.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import { Tab, Form, Nav, FormControl, Button, CardDeck } from "react-bootstrap";
import "../DetailKelas/DetailKelas.css";
import "bootstrap/dist/css/bootstrap.min.css";
const MenuKelas = () => {
  const [key, setKey] = useState("");

  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Gambar}
            width="100%"
            alt="gambar"
          />
          <Tabs defaultActiveKey="semuaKelas" id="uncontrolled-tab-example">
            <Tab eventKey="semuaKelas" title="Semua Kelas">
              <Cards />
            </Tab>
            <Tab eventKey="kelasSaya" title="Kelas Saya"></Tab>
          </Tabs>
          {/* <Carousel.Caption>
              <div className="judul">
                Selamat Datang
                <br /> Di Kelas Desain Grafis
              </div>
            </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default MenuKelas;
