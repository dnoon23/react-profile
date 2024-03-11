import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
    <Navbar className="" >
      <div className="">
        <Nav className="mr-auto">
          {/* Conditionally set the 'to' prop based on isAuthenticated */}
          <Nav.Link as={Link} to={"/about"} className="text-white">
          About Me
          </Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to={"/portfolio"} className=""> Portfolio</Nav.Link>
        </Nav>
        <Nav.Link as={Link} to={"/contact"} className="text-white">
          Contact
          </Nav.Link>
          <Nav className="mr-auto">
          {/* Conditionally set the 'to' prop based on isAuthenticated */}
          <Nav.Link as={Link} to={"/resume"} className="text-white">
          Resume
          </Nav.Link>
          </Nav>
        
      </div>
    </Navbar>
    </header>
  );
};

export default Header;