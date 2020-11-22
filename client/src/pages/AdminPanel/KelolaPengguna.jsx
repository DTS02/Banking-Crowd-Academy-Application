import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import "./AdminPanel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

class KelolaPengguna extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h3 className="judul">Kelola Pengguna</h3>
        </div>
        <div className="table">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Level</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Fragment>
    );
  }
}
export default KelolaPengguna;
