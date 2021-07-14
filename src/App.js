
import MainComponent from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import ShopLogo from './components/itemBox/ShopLogo';
import { Container, Row, Col } from "react-bootstrap";
import Navbar from './components/itemBox/Navbar';
import ImageGridCrousal from './components/itemBox/ImageGridCrousal';
import Login from './components/LoginForm/Login';
import Signup from './components/SignupForm/Signup';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/login">
           <Login/>
          </Route>

          <Route path="/signup">
           <Signup />
          </Route>
       
        <Container>
          <Row>
            <Col xs lg="2"> <ShopLogo />  </Col>
            <Col> <Navbar /> </Col>
          </Row>
          <Row>
            <Col> <ImageGridCrousal /> </Col>
          </Row>
        </Container>
         
        </Switch>
      </Router>
      <MainComponent />
      <h6 style={{textAlign:"center"}}>&copy; All CopyRights Reserved to DockerMaia </h6>    
     

    </div>
  );
}

export default App;
