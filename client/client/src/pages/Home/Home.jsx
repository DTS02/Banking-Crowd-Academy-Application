import React, { Component } from 'react';
import { Button, FormControl, Form } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css';
import './HomeBurger';
import HomeBurger from './HomeBurger';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import assets from '../../assets/1-1.jpg';
import Cards from './Cards';



class Home extends Component {
    render() {
        return (
                 <div>   <body>
                        <div className="bg">
                            <div className="bg-container">
                                <h1>Selamat Datang, Suna Rintarou !</h1>
                                <p>Ada banyak Topik menarik yang bisa kamu pilih,
                                    yuk cek topik yang lagi tren di sini.
                                </p>
                            </div>
                        </div>
                        <Cards/>
                    </body>
          </div>
        )
    }
}


// class HeaderHome extends Component{
//     render(){
//         return(
            
//                 <MDBContainer>
//                     <div>
//                     <Router>
//                         <Navbar bg="white" className="justify-content-between">
//                             <Navbar.Brand href="/App">Crowd Academy</Navbar.Brand>
//                             <Navbar.Collapse id="basic-navbar-nav">
//                                 <Form inline>
//                                     <input type="text" placeholder="Search.." name="search" className="edit-search"/>
//                                     <input type="button" class="btn-Search"/>
//                                 </Form>
//                             </Navbar.Collapse>
//                             <Navbar.Collapse>
//                                 <Navbar.Text className="justify-content-end">
//                                     Signed in as: <a href="#login">Pelajar</a>
//                                 </Navbar.Text>
//                             </Navbar.Collapse>
//                         </Navbar>
//                         <div className="">
//                             {/* uncoment dibawah ini dan masukan Url login */}
//                             {/* <Route path="/Login" component={Login}/> */}
//                         </div>
//                     </Router>
//                     </div>
//                </MDBContainer>

           
//         )
//     }
// }

class SlideShow extends Component{
    render(){
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
          };

        return(
            <div className="sw-container">
            <Slider {...settings}>
            <div><img src={assets} alt="assets"/></div>
            <div><img src={'../../assets/1-1.jpg'} alt="Gambar 2"/></div>
            {/* <div><img src={require('../../assets/3.jpg')} alt="Gambar 3"/></div>
            <div><img src={require('../..assets/3.jpg')} alt="Gambar 4"/></div>
            <div><img src={require('../../assets/3.jpg')} alt="Gambar 5"/></div> */}
            </Slider>
          </div>
        )
    } 

}

export default Home;