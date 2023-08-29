import React from 'react'
import { Button, Nav, Navbar, Container } from 'react-bootstrap';

function Navibar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">ShoeStore</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navibar