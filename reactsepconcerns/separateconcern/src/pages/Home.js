import Main from "../components/Main";
import React from "react";
import LoginButton from "../components/LoginButton";
import { Container, Row, Col, Image,Button,Card } from "react-bootstrap";
import LogoutButton from "../components/LogoutButton";
import { LoggedInContext } from '../App';
import {useContext} from 'react';

function Home(){
const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
if(!isLoggedIn){
return (

  <Container>
    <Row><div><LoginButton /></div></Row>
  </Container>

)}
else{
return (
  <Container>
    <Row><div>Welcome!<LogoutButton /></div></Row>
  </Container>
)

}
    /**
     *   return (
    <Container>
      <Row className="my-1 py-1">   
      <div>
        <LoginButton />
        <LogoutButton />
        <p>Welcome</p>
      </div>
      </Row>
      <Row className="my-3">
      <Col sm={6}>   
      <div>
      <Main />
      </div>
      </Col>
      <Col sm={6}>   
      <Image
        src="img11.PNG"
        fluid
        rounded
        />
      </Col>
    </Row>
    <Row>
      <Card className="text-center bg-secondary text-white my-2 py-1">
        <Card.Body>
          Welcome to visit my website.You can find interesting product and service here.
      </Card.Body>
      </Card>
    </Row>
    <Row className="my-2">
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img9.PNG" />
      <Card.Body>
        <Card.Title>New Product</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. 
        </Card.Text>
        <Button variant="primary">See more...</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img4.PNG" />
      <Card.Body>
        <Card.Title>New Service</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. 
        </Card.Text>
        <Button variant="primary">See more...</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img8.PNG" />
      <Card.Body>
        <Card.Title>New Product</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. 
        </Card.Text>
        <Button variant="primary">See more...</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img6.PNG" />
      <Card.Body>
        <Card.Title>New Service</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. 
        </Card.Text>
        <Button variant="primary">See more...</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    </Container>

  );
     */

};
export default Home;