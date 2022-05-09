import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link className='mx-4 fs-4 text-decoration-none' to={'/'}>Home</Link>
              <Link className='mx-4 fs-4 text-decoration-none' to={'/inventory'}>Inventory</Link>
              <Link className='mx-4 fs-4 text-decoration-none' to={'/orders'}>Orders</Link>
              <Link className='mx-4 fs-4 text-decoration-none' to={'/login'}>Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;