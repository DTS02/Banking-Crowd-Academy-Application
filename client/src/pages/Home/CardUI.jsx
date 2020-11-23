import React, { useState, useEffect, Fragment } from "react";
import "./Card-Style.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import SearchBox from "../../component/SearchBox";
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
        <p className="card-text text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          pariatur sed nihil odio officiis quibusdam omnis, adipisci ad
          repellendus at.
        </p>
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
    
 
          <p className="labelmodal">Kamu Memilih Kelas : Design UI/UX</p>
          <SearchBox />
          <p className="labelmodal">Jadwal Kelas : Senin, 13.00 (WIB)</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" className="btn1">
              Ambil Kelas
            </Button>
       
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

export default Cards;
