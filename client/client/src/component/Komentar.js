import React, { Component } from "react";
import { Form, Button, Col, Card, Toast } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
class CommentBox extends Component {
  render() {
    return (
      <div>
        <Card border="secondary" style={{ width: "21rem" }}>
          <Card.Header>
            <h1>Komentar</h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h6>Silahkan tulis komentar disini</h6>
            </Card.Title>
            <Card.Text>
              <Form.Control as="textarea" rows={3} />
            </Card.Text>
          </Card.Body>

          <Col style={{ textAlign: "right" }}>
            <Button className="Buttonclass" type="submit">
              Komentar
            </Button>
          </Col>
          <br />
        </Card>
        <br />
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Nama</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>isi komentar</Toast.Body>
        </Toast>
      </div>
    );
  }
}

export default CommentBox;