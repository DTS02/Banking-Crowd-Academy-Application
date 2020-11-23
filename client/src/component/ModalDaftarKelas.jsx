import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./modal.css";

import Modal from "react-bootstrap/Modal";
import { BrowserRouter as Router } from "react-router-dom";
// import { Form } from "reactstrap";
import { Button, Row, Col, Form } from "react-bootstrap";
import SearchBox from "./SearchBox";
// import Message from "../../component/Message";
// import Loader from "../../component/Loader";

const ModalDaftarKelas = ({ location, history }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(login(email, password));
  // };

  return (
    <Router>
      <Fragment>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>

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
          <p className="labelmodal">Kamu Memilih Kelas : Design UI/UX</p>
          <SearchBox />
          <p className="labelmodal">Jadwal Kelas : Senin, 13.00 (WIB)</p>

          <Modal.Footer>
            <Button variant="primary" className="btn1">
              Ambil Kelas
            </Button>
          </Modal.Footer>
          <h1 className="p2">
            Dengan kamu klik tombol diatas kelas ini akan masuk ke daftar kelas
            pilihanmu
          </h1>
          {/* <Form.Text id="passwordHelpBlock"className="passnote" muted>
           Password Minimal 8 Karakter.
          </Form.Text> */}
        </Modal>
      </Fragment>
    </Router>
  );
};

export default ModalDaftarKelas;
