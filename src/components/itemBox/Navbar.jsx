import React, { Component } from 'react';
import './ItemBoxStyles.css'
import {Nav} from "react-bootstrap";


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

                {/* NAV bar */}
                <Nav defaultActiveKey="/home" as="ul" className="navbarstyle">
                  <Nav.Item as="li" className ="navbarItem">
                  <Nav.Link href="/home" className="navbarLink">Vegetables</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className ="navbarItem" >
                    <Nav.Link eventKey="link-1" className="navbarLink">Meat & SeaFood</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className ="navbarItem" >
                 <Nav.Link eventKey="link-2" className="navbarLink">Fruits</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className ="navbarItem" >
                  <Nav.Link eventKey="link-2" className="navbarLink" href="/login">Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className ="navbarItem" >
                  <Nav.Link eventKey="link-2" className="navbarLink" href="/signup">SignUp</Nav.Link>
                  </Nav.Item>
                 </Nav>
            </div>
         );
    }
}
 
export default Navbar ;