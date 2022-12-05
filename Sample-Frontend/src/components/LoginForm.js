import { Container,Row,Button } from "react-bootstrap";
import "./LoginForm.css";

const LoginForm = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
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
                    </div>
                </Row>
                </Container> 
                </div>
    )
} 

export default LoginForm;