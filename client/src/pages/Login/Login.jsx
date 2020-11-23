import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.css";
import { login } from "../../actions/userActions";
import { BrowserRouter as Router } from "react-router-dom";
// import { Form } from "reactstrap";
import { Button, Row, Col,Form } from "react-bootstrap";
import Message from "../../component/Message";
import Loader from "../../component/Loader";

const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Router>
      <Fragment>
        < Form className="login" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label className="font-weight-bold">
              Selamat Datang Kamu, <br/><br/>Yuk Masuk!
            </Form.Label>
           
          </Form.Group>
         
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="name"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group>
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Lupa Password ?
              </Link>
            </Form.Group>

            <Form.Group>
              <Button type="submit" className="btn1" variant="default">
                Masuk
              </Button>

              <Row className="py-3">
                <Col>
                  Kamu Belum Gabung ?{" "}
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                  >
                    Daftar
                  </Link>
                </Col>
              </Row>
            </Form.Group>
          
        </Form>
      </Fragment>
    </Router>
  );
};

export default Login;
