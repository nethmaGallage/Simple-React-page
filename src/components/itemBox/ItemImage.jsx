import React, { Component } from 'react';
import './ItemBoxStyless.css'

class ItemImage extends Component{

    render(){
        return(
            <div>
                <img className="proimg" src={this.props.image} />


            </div>
        )
    }
}

export default ItemImage;