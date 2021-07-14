import React, { Component } from 'react';
import './ItemBoxStyles.css'
import { Card, Button, Row, Col } from "react-bootstrap";
import Facebook from "../../Images/facebook.png"
import PlayStore from "../../Images/playstore.png"
import Gmail from "../../Images/gmail.png"


class FooterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <footer>
                    <Card >
                        <Card.Body style={{ display: "flex", }}>
                            <Card.Title className="footerstyles" >COMPANY</Card.Title>
                            <Card.Title className="footerstyles">CONTACT</Card.Title>
                            <Card.Title className="footerstyles">PRIVACY POLICY</Card.Title>

                            <Row xs="auto" style={{ padding: "0px", marginLeft: "50%" }} >
                                <Col style={{ float: "right" }}> <Button style={{ float: "right", border: "none", backgroundColor: "white" }} variant="outline-secondary"><img className="social-icons" src={Facebook} width="25px" alt="facebook icon"></img></Button>{' '} <Button style={{ float: "right", border: "none", backgroundColor: "white" }} variant="outline-secondary"><img className="social-icons" src={PlayStore} width="25px" alt="playstore icon"></img></Button>{' '} <Button style={{ float: "right", border: "none", backgroundColor: "white" }} variant="outline-secondary"><img className="social-icons" src={Gmail} width="25px" alt="gmail icon"></img></Button>{' '}</Col>

                            </Row>
                        </Card.Body>


                    </Card>


                </footer>
            </div>

        );
    }
}

export default FooterBox;