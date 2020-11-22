import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import React, { Component } from "react";
import Gambar from "../../assets/top.png";
import Figure from "react-bootstrap/Figure";
import "./Profil.css";
import { Form, Button, Col, Container, Row } from "react-bootstrap";

class Profile extends Component {
  state = {
    profileImg:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div>
        <Container>
          <div className="Profile">
            <Row>
              <Image src={Gambar} fluid />
            </Row>
            <br></br>
            <h2>Profil</h2>
            <br></br>
            <div>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  style={{
                    border: "2px",
                  }}
                  alt=""
                  src={profileImg}
                />{" "}
                <br></br>
                <input
                  type="file"
                  name="img-upload"
                  id="profil"
                  accept="image/*"
                  onChange={this.imageHandler}
                />
                <Figure.Caption>
                  <h3>ID: 12334567</h3>
                </Figure.Caption>
              </Figure>
            </div>
          </div>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Nama Depan</Form.Label>
                  <Form.Control
                    type="firstname"
                    placeholder="Nama Depan"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Nama Belakang</Form.Label>
                  <Form.Control
                    type="lastname"
                    placeholder="Nama Belakang"
                    required
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" required />
            </Form.Group>
            <Form.Group controlId="Alamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control placeholder="Alamat" required />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Password" />
              </Form.Group>

              <Form.Group as={Col} controlId="ConfirmPass">
                <Form.Label>Konfirmasi Password</Form.Label>
                <Form.Control placeholder="Konfirmasi Password" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="Alamat">
              <Form.Label>Status</Form.Label>
              <Form.Control placeholder="Status" />
            </Form.Group>
            <div className="Button-profile">
              <Button variant="primary" type="submit">
                Submit
              </Button>{" "}
              <Button variant="danger" type="cancel">
                Cancel
              </Button>
            </div>
            <br></br>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Profile;
