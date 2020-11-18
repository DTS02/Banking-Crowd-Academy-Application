import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import './Registrasi.css';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




class Registrasi extends Component {
    render() {
        return (
            <Router>
            <Fragment>

                <div className="form-add-post">
                    <p className='headtitle'>Yuk daftar<br /> biar bisa belajar<br /> bareng kita</p>
                    <div className='nama-satu'>
                        <input type="text" name="title" placeholder="Nama Depan Kamu" ></input>
                        <input type="text" name="title"  placeholder="Nama Belakang Kamu" ></input>
                    </div>
                    <div className='nama-dua'>
                    <input type="text" name="title" placeholder="Username Kamu" ></input>
                        <input type="text" name="title" placeholder="Email" ></input>
                        <input type="password" name="title" placeholder="Password" ></input>
                        <input type="Password" name="title" placeholder="Konfirmasi Password Kamu" ></input>
                                <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Pilih Status Anggota
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Pengajar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Pelajar</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                                </Dropdown>

                    </div>
                                                    
                    <button className="btn-submit" >Daftar</button>
                    <p className='kelogin'>Kamu sudah mendaftar? Yuk langsung  <Link to ="/login">masuk!</Link></p>
                </div>
            

            </Fragment>
            </Router>
            
        )
    }
}
export default Registrasi;