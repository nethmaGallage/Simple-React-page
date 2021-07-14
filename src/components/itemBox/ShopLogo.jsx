import React, { Component } from 'react';
import './ItemBoxStyles.css'
import logo from '../../Images/superlogo.png';



class ShopLogo extends Component{

    render(){
        return(
            <div>
                <img src={logo} alt="Logo" className="logo-img"/>
           </div>
        )
    }
}

export default ShopLogo;