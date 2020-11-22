import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import "./AdminPanel.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Gambar from "../images/2.png";
import Header from "./Header";
import Footer from "./Footer";
import KelolaPenggguna from "./KelolaPengguna";
import DashboardAdmin from "./DashboardAdmin";

class AdminPanel extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className="image-top">
          <Image src={Gambar} width ="100%"alt="gambar" />
        </div>
        <DashboardAdmin />
        {/* <KelolaPenggguna /> */}
        <Footer />
      </Fragment>
    );
  }
}
export default AdminPanel;
