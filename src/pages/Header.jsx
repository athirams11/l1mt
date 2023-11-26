import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';

function Header({ selectRegion, selectedRegion }) {

    const region = ['All', 'Asia', 'Europe']

    return (
        <Row>
            <Navbar expand="sm" className="bg-body-tertiary mt-3 ">
                <Container className='nav-sm-p'>
                    <Navbar.Brand className='header-text'>Countries</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav variant="underline" activeKey={selectedRegion}>
                            {region.map(item => (
                                <Nav.Item key={item} onClick={() => selectRegion(item)}>
                                    <Nav.Link eventKey={item}>{item}</Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
}

export default Header;