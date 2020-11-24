import React, { Component, Fragment } from "react";
import "../pages/AdminPanel/AdminPanel.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-cont">
          <footer className="footer">
            <div>© DTS20-FEBE02-UGM Copyright</div>
          </footer>
        </div>
      </Fragment>
    );
  }
}
export default Footer;
