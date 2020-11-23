import React, {Component} from 'react';
import CardUI from './CardUI';

import img1 from '../../assets/3.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/1.jpg';

import axios from 'axios';


class Cards extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         items:[],
    //         isLoaded: false,
    //         redirectToReferrer:false,
    //         token:''
    //     }
    // }
    
    
     state = {
         classes:[],
         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI3MzEyYjEwMjQwOTBiYzg0MTAyZWUiLCJpYXQiOjE2MDYwNjUxMzgsImV4cCI6MTYwNjY2OTkzOH0.W79eT7xss8IWDxpy6x1BE9fTc5r_8lLmJG2KZgVtr7g'
     }

     componentDidMount(){
        axios.get(`/dashboard/class/all`, {headers: {"Authorization" : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI3MzEyYjEwMjQwOTBiYzg0MTAyZWUiLCJpYXQiOjE2MDYwNjUxMzgsImV4cCI6MTYwNjY2OTkzOH0.W79eT7xss8IWDxpy6x1BE9fTc5r_8lLmJG2KZgVtr7g`}})
        .then(res => {
            const classes = res.data;
            console.log(res.data);
            this.setState({classes})
        })
     }

    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <CardUI imgsrc={img1} title={ this.state.classes.map(classes => <h4>{classes.className}</h4>)}/>
                    </div>
                    <div className="col-md-4">
                        <CardUI imgsrc={img2} title="Manajemen Project"/>
                    </div>
                    <div className="col-md-4">
                        <CardUI imgsrc={img3} title="Ilustrasi Desain"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards