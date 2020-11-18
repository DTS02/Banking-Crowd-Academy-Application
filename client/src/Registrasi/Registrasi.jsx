import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import './Registrasi.css';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Registrasi extends Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
        handleChange = (e) => {
        const {id , value} = e.target   
        this.setState(prevState => ({
            ...prevState,
            [id] : value
            }))
        }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName + " " + this.state.lastName);
        event.preventDefault();
      }


    render() {
        return (
            <Router>
            <Fragment>

                <form className="form-add-post" onSubmit={this.handleSubmit}>
                    <p className='headtitle'>Yuk daftar<br /> biar bisa belajar<br /> bareng kita</p>
                    <div className='nama-satu'>
                        <input id="firstName" type="text" name="title" placeholder="Nama Depan Kamu" value={this.state.firstName} onChange={this.handleChange} />
                        <input id="lastName" type="text" name="title"  placeholder="Nama Belakang Kamu" value={this.state.lastName} onChange={this.handleChange} />
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
                    <input className="btn-submit" type="submit" value="Daftar" />                                
                    <p className='kelogin'>Kamu sudah mendaftar? Yuk langsung  <Link to ="/login">masuk!</Link></p>
                </form>
            

            </Fragment>
            </Router>
            
        )
    }
}
export default Registrasi;