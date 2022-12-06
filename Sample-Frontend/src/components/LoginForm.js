import { Container,Row,Button, Col } from "react-bootstrap";
import "./LoginForm.css";

const LoginForm = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
                <Col sm={5}></Col>
                <Col sm={3}>                    
                <div className="intro-text">
                        <div>
                        <h1>Note any time, welcome...</h1>
                        <p>ideas, moods, reviews, anything you can not here...</p>
                        </div>
                        <div className="buttonContainer">
                            <a href="/login">
                                <Button size="small" className="loginButton">Login</Button>
                            </a>
                            <a href="/register">
                                <Button size="small" className="loginButton">Register</Button>
                            </a>

                        </div>
                    </div></Col>
                <Col sm={4}></Col>

                </Row>
                </Container> 
                </div>
    )
} 

export default LoginForm;