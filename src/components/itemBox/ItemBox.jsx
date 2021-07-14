import React, { Component } from 'react';
import './ItemBoxStyles.css'
import { Container, Row, Col, Button, Card } from "react-bootstrap";



class ItemBox extends Component {


  render() {
    return (
      <div align="center">

        <Container >
          <Card style={{ width: '17rem' }} className="cardstyle">
            <Card.Body>
              <Row>
                <Col> <Card.Img img className="proimg" src={this.props.image} alt="item-image" />
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Text>
                    {`for 1kg - RS. ${this.props.price}`}
                  </Card.Text>
                  <Card.Text>
                    {this.props.des}
                  </Card.Text>
                  <Button variant="primary">Add to cart</Button></Col>

              </Row>
            </Card.Body>
          </Card>
        </Container>





      </div>
    );
  }
}

export default ItemBox;