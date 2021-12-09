import React from 'react';
import { Navbar,  Nav} from 'react-bootstrap';
import CartWidget from './cartWidget';
import {useHistory} from 'react-router-dom';

export default function NavBar(){

    let history = useHistory();

    return(

        <div className='App tc f3'>

        <Navbar bg='light' expand='lg'>

          <Navbar.Brand onClick={()=> history.push('/HomePage')} href="">REACT COURSE</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className='mr-auto'>

              <Nav.Link onClick={()=> history.push('/HomePage')} href="">HOME</Nav.Link>

              <Nav.Link onClick={()=> history.push('/Products')} href="">PRODUCTS</Nav.Link>

              <Nav.Link onClick={()=> history.push('/AboutUs')} href="">ABOUT</Nav.Link>

              <Nav.Link onClick={()=> history.push('/ContactUs')} href="">CONTACT</Nav.Link>
              
            </Nav>
            
          </Navbar.Collapse>

          <CartWidget/>

        </Navbar>

      </div>
    )
}