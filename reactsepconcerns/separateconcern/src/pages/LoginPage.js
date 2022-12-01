import { Container, Row, Col} from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import Register from "../components/Register";

const LoginPage = () => {
    return (
        <Container>
            <Row className="px4-4 my-5">
                <Col sm={3}>   
                    <h1 class="font-weigh-light">Login</h1>
                </Col>
                <Col sm={7}>
                    <LoginForm />
                </Col>
                <Col sm={2}>
                    <Register />
                </Col>
            </Row>
           
        </Container>
    );
}
export default LoginPage;