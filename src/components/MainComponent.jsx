import React from 'react'
import './itemBox/ItemBoxStyles.css'
import ItemBox from './itemBox/ItemBox';
import Raththi from '../Images/raththi2.jpg'
import Pumking from '../Images/Pumking.jpg'
import TOMATO from '../Images/TOMATO.jpg'
import Fish from '../Images/Fish.jpg'
import Astra from '../Images/Astra.jpeg'
import { Col, Row, Container } from 'react-bootstrap';
import FooterBox from './itemBox/FooterBox';




class MainComponent extends React.Component {



  getItems() {

    let items = [
      { title: "Raththi", price: 450.50, des: "Raththi is the best milk powder", image: Raththi },
      { title: "Pumking", price: 450, des: "Raththi is the best milk powder", image: Pumking },
      { title: "Tomato", price: 450.50, des: "Raththi is the best milk powder", image: TOMATO },
      { title: "Astra", price: 450.50, des: "Raththi is the best milk powder", image: Fish },
      { title: "Astra", price: 450.50, des: "Raththi is the best milk powder", image: Astra, dicount: 0.04 },
    ]

   

    // let renderItems = []
    // items.forEach(item => {
    //   renderItems.push(<Col> <ItemBox title={item.title} price={item.price} des={item.des} image={item.image} />  </Col>)
    // })

    let renderItems = items.map((item, index) =>
      <Col key={index} > <ItemBox title={item.title + index} price={item.dicount ? item.price - item.price * item.dicount : item.price} des={item.des} image={item.image} />  </Col>
    )

    return renderItems

  }

  

  render() {
    return (
      <div>
        <Container className="box">
          <Row md={3} >
            {this.getItems()}
            
            {/* <Col> <ItemBox title=" Raththi " price="450.00" des="Raththi is the best milk powder" image={Raththi} />  </Col>
            <Col> <ItemBox title=" Pumking " price="120.00" des="IN STOCK" image={Pumking} />                         </Col>
            <Col> <ItemBox title=" Tomato " price="200.00" des="IN STOCK" image={TOMATO} />                                 </Col>
            <Col> <ItemBox title="Thalapath Fish" price="350.00" des="OUT OF STOCK" image={Fish} />             </Col>
            <Col> <ItemBox title="Astra Butter" price="350.00" des="IN STOCK" image={Astra} />                            </Col>
            <Col> <ItemBox title=" Nestomalt" price="350.00" des="IN STOCK" image={Astra} />                              </Col>
            <Col> <ItemBox title=" Nestomalt" price="350.00" des="IN STOCK" image={Astra} />                              </Col>
            <Col> <ItemBox title=" Nestomalt" price="350.00" des="IN STOCK" image={Astra} />                              </Col>
            <Col> <ItemBox title=" Nestomalt" price="350.00" des="IN STOCK" image={Astra} />                              </Col> */}
          </Row>
          <FooterBox />
        </Container>

      </div>
    );
  }
}

export default MainComponent;