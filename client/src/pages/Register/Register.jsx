import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Register.css";
import { register } from "../../actions/userActions";
import Form from "react-bootstrap/Form";
import { Col, Button,Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "../../component/Message";
import Loader from "../../component/Loader";

const Register = ({ location, history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("pelajar","admin","pengajar");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        register(
          firstName,
          lastName,
          userName,
          email,
          role,
          password,
          passwordConfirm
           
        ),
      )
    } console.log({ firstName, lastName, userName, email, role, password, passwordConfirm });
  };

  return (
    <Router>
      <Fragment>
        
        <Form className="form-add-post" onSubmit={submitHandler}>
          <p className="headtitle">
            Yuk daftar
            <br /> biar bisa belajar
             bareng kita
          </p>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          {error && <Alert variant="danger">{error}</Alert>}
          
            <Form.Row>
              <Form.Group as={Col} className="nama-satu" controlId="firstName"> 
                <Form.Control
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="firstName"
                  placeholder="Nama Depan Kamu"
                />
              </Form.Group>
              <Form.Group as={Col}  className="nama-satu" controlId="lastName">
                <Form.Control
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="lastName"
                  placeholder="Nama Belakang Kamu"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group className="nama-dua" controlId="userName">
              <Form.Control
                value={userName}
                required
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="userName"
                placeholder="Nama Panggilan Kamu"
            />
          </Form.Group>
          <Form.Group className="nama-dua" controlId="email">
              <Form.Control
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Email"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="nama-dua" controlId="password">
              <Form.Control
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="nama-dua" controlId="passwordConfirm">
              <Form.Control
                value={passwordConfirm}
                required
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
                name="passwordConfirm"
                placeholder="Konfirmasi Password"
            ></Form.Control>
          </Form.Group>
          <div className="nama-dua" controlId="role">
              <select>
                <option>Pilih Status Anggota</option>
                <option
                value='pengajar'
                  required
                  onChange={(e) => setRole(e.target.value)}
                  name="role"
                >
                  Pengajar
                </option>
                <option
                  value='pelajar'
                  required
                  onChange={(e) => setRole(e.target.value)}
                name="role"
                id="1"
                >
                  Pelajar
                </option>
            </select>
            </div>
            

            <Button className="btn-submit" type="submit" variant="default">
              Daftar
            </Button>
            <p className="kelogin">
              Kamu sudah mendaftar? Yuk langsung{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Masuk
              </Link>
            </p>
          
        </Form>
      </Fragment>
    </Router>
  );
};

export default Register;
