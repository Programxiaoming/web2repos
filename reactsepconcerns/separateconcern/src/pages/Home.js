import Main from "../components/Main";
import React from "react";
import DbData from "../components/DbData";
import DbData1 from "../components/DbData1";
import DbData2 from "../components/DbData2";
import DbData3 from "../components/DbData3";
import DbData4 from "../components/DbData4";
import DbData5 from "../components/DbData5";
import DbData6 from "../components/DbData6";
import { Container, Row, Col, Image,Button,Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="my-3">
      <Col sm={6}>   
      <div>
      <Main />
      </div>
      <div>
      <DbData />
      </div>
      <div>
      <DbData1 />
      </div>
      <div>
      <DbData2 />
      </div>
      <div>
      <DbData3 />
      </div>
      <div>
      <DbData4 />
      </div>
      <div>
      <DbData5 />
      </div>
      <div>
      <DbData6 />
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
};
export default Home;