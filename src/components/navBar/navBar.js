import React from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';


export default function navBar(){
    return(
        <div className='App tc f3'>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href="#home">REACT COURSE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">ABOUT</Nav.Link>
              <Nav.Link href="#link">CONTACT</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}