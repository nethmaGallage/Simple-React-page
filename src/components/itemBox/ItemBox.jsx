import  React,{Component} from 'react';
import './ItemBoxStyles.css'


class ItemBox extends Component{


    render(){
        return(
            <div className = "box" align = "center">
                <h1>{this.props.title} </h1>
                <img className ="proimg" src={this.props.image} />
                <p> {`RS. ${this.props.price}`} </p>
                <p>{this.props.des}</p>
            </div>
        );
    }
}

export default ItemBox;