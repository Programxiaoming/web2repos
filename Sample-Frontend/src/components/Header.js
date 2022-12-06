import { FormControl, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import Avatar from './Avatar';

function Header() {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand><Link to= "/">Note Any Time</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            </Nav>
            <Avatar />
          <Nav className="m-auto">
            <Nav.Link href="#home">My Notes</Nav.Link>
            
            <NavDropdown title="My Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Edit My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Edit Avatar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/UserPage">UserPage</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;