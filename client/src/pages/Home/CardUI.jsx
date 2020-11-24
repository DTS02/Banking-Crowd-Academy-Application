import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Card-Style.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import SearchBox from "../../component/SearchBox";
import { Component } from "react";
import axios from 'axios';
import { authHeader } from "../../actions/userActions";

const Cards = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
     
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-tittle">{props.title}</h4>
        <p className="card-text text-secondary">{props.description}</p>
        <p className="card-text text-secondary"> Start Learn : {props.date}</p>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Daftar Kelas</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
    
 
          <p className="labelmodal">Kamu Memilih Kelas : {props.title}</p>
          <SearchBox />
  <p className="labelmodal">Jadwal Kelas : {props.date}</p>
          </Modal.Body>
          <Modal.Footer>
          <Link to = "/DetailKelas">
            <Button variant="primary" className="btn1">
            
              Ambil Kelas
            </Button>
       </Link>
          <p className="p2">
              Dengan kamu klik tombol diatas kelas ini akan masuk ke daftar kelas
              pilihanmu
          </p>
          </Modal.Footer>
          {/* <Form.Text id="passwordHelpBlock"className="passnote" muted>
           Password Minimal 8 Karakter.
          </Form.Text> */}
        </Modal>

        <a href="#" className="btn btn-outline-primary" onClick={handleShow}>
          Pilih Kelas
        </a>
        {/* <a href="" className="btn btn-outline-primary">
       
        </a> */}

        <a href="#" className="btn btn-outline-success">
          Lihat Kelas
        </a>
      </div>
    </div>
  );

};

class ApiHandler extends Component{
  state = {
    enroll:[],
}


componentDidMount(){
   axios.get(`/class/all`, {headers: authHeader()})
   .then(res => {
       const enroll = res.data;
       console.log(res.data);
       this.setState({enroll})
   });
}


}


export default Cards;
