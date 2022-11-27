import React from'react';
import { Container } from 'react-bootstrap';

export function Footer() {
    return (
        <footer class="py-5 my-5 bg-light text-center">
        <Container className="px-4">
            <p>Copyright &copy; Xiaoming's Website 2022</p>
        </Container>
        </footer>
    );
}
export default Footer;