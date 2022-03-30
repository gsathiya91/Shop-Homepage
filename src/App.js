import React from 'react';
import './index.css';
import PaperComponent from './Paper.js';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Homepage() {
  return (
      <>
      <Navbar bg="light" expand="lg">
      <Container>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Popular Items</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
            </NavDropdown>
               <Button className="cart"><ShoppingCartIcon />&nbsp;Cart <span>0</span></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="title">
        <h2 className="shopin">Shop in style</h2>
        <h5 className="shoppin">With this shop hompeage template</h5>
      </div>

      <div>

        <PaperComponent />

      </div>
      </>

    
      );
}
