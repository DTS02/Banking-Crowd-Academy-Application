import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../component/Message";
import Loader from "../../component/Loader";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";

import { USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

import Gambar from "../../assets/top.png";
import Figure from "react-bootstrap/Figure";
import "./Profil.css";
import { Form, Button, Col, Container, Row } from "react-bootstrap";

const Profile = ({ location, history }) => {
  const [role, setRole] = useState("pengajar", "pelajar", "admin");
  const [_id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState(null);
  const [photoProfile, setPhotoProfile] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.userName || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails("profile"));
      } else {
        // setFirstName(user.firstName);
        // setLastName(user.lastName);
        setUserName(user.userName);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      setMessage('Passwords do not match')
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          firstName,
          lastName,
          userName,
          email,
          role,
          password,
          photoProfile
        })
      );
    };
    }

    return (
      <Fragment>
        <div>
          <Container>
            <div className="Profile">
              <Row>
                <Image src={Gambar} fluid />
              </Row>
              <br></br>
              <h2>Profil</h2>
              <br></br>
              {message && <Message variant="danger">{message}</Message>}
              { }
              {success && <Message variant="success">Profile Updated</Message>}
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                    ""
                  )}
              <div>
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    style={{
                      border: "2px"
                    }}
                    alt=""
                    src={""}
                  />{" "}
                  <br></br>
                  <input
                    type="file"
                    name="photoProfile"
                    id="photoProfile"
                    accept="image/*"
                    onChange={(e) => setPhotoProfile(e.target.value)}
                  />
                  <Figure.Caption>
                    <h3>
                      ID:<Form.Control type="_id"></Form.Control>
                    </h3>
                  </Figure.Caption>
                </Figure>
              </div>
            </div>

            <Form onSubmit={submitHandler}>
              <Form.Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Label>Nama Depan</Form.Label>
                    <Form.Control
                      type="firstName"
                      placeholder="Nama Depan "
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Label>Nama Belakang</Form.Label>
                    <Form.Control
                      type="lastName"
                      placeholder="Nama Belakang"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group controlId="userName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="userName"
                  placeholder="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="contoh@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="passwordConfirm">
                  <Form.Label>Konfirmasi Password</Form.Label>
                  <Form.Control
                    placeholder="Konfirmasi Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="role">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="role"
                  placeholder="Status Anggota"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </Form.Group>
              <div className="Button-profile">
                <Button variant="primary" type="submit">
                  Update
              </Button>{" "}
                <Button variant="danger" type="cancel">
                  Cancel
              </Button>
              </div>
              <br></br>
            </Form>
          </Container>
        </div>
      </Fragment>
    );
  };

export default Profile;
