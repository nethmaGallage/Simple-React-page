import React, { Component } from 'react';
import './ItemBoxStyles.css'
import {Carousel} from "react-bootstrap";
import Vegetables from '../../Images/Vegetables.jpg';
import Fruits from '../../Images/Fruits.jpeg';
import SeaFood from '../../Images/SeaFood.png';

class ImageGridCrousal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                
                <Carousel fade >
                <Carousel.Item interval={1000} >
                    <img 
                    className="d-block w-100  " 
                    src={Vegetables}  alt="First slide" />
                    <Carousel.Caption >
                    <h3  className="carousal-caption"  >Vegetables</h3>
                    <p  className="carousal-caption" >Fresh vegetables.No harmful Chemicals</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100" 
                    src={Fruits}    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3  className="carousal-caption" >Fruits</h3>
                    <p className="carousal-caption" >Fresh Fruits ,free from Chemicals tasty good</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={SeaFood}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="carousal-caption" >Meat & SeaFood </h3>
                    <p className="carousal-caption" >Collect all fresh meats and seaFoods from one place</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
              
            </div>
         );
    }
}
 
export default ImageGridCrousal  ;