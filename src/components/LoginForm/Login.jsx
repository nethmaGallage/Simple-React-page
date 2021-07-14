import React, { Component } from 'react';
import '../itemBox/ItemBoxStyles.css'
import { Form,Button } from "react-bootstrap";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:""
         }
    }

    onSubmitHandler =() =>{
        alert('email',this.state.email)
    }
    
    onChangeHandler =(e) =>{
        this.setState({
            email:e.target.value
        })
    }
    render() { 
        return ( 
            
        <div className="login-parent">
            <div className="login-name">
                <h1 className="title">LOGIN</h1>
            </div>
            <div className="login-form">
                <Form onSubmit={this.onSubmitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  onChange={this.onChangeHandler} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                   
                    <Button style={{backgroundColor:"aliceblue",width:"100%",marginTop:"2vh" , color:"black"}} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
            
        </div> );
    }
}
 
export default Login;