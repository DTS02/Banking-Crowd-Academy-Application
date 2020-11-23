import React, {Component} from 'react';
import CardUI from './CardUI';

import img1 from '../../assets/3.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/1.jpg';

import axios from 'axios';
import { authHeader } from "../../actions/userActions";


class Cards extends Component{
    
     state = {
         classes:[],
     }

     async componentDidMount(){
       await axios.get(`/class/all`, {headers: authHeader()})
        .then(res => {
            const classes = res.data;
            console.log(res.data);
            this.setState({classes})
        });
     }

    render(){
        let ClassCard = this.state.classes.map(classes =>{
            return(
            
                <div className="col-md-4">
                    {/* <CardUI classes={classes}/> */}
                    <CardUI imgsrc={img1} title={classes.className} description={classes.classDetail} date={classes.classStart}/>
                </div>
            
            ) 
        })
        return(
            <div className="container-fluid d-flex justify-content-center: space-between">
                <div className="row">
                    {ClassCard}
                </div>
            </div>
        );
    }
}

export default Cards