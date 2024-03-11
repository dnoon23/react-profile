import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../output.css';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    Cookies.remove('auth_cookie');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const authCookie = Cookies.get('auth_cookie');
    if (authCookie) {
      setIsAuthenticated(true);
    }
  }, []); 

  return (
    <Navbar className="" style=''>
      <div className="">
        <Nav className="mr-auto">
          {/* Conditionally set the 'to' prop based on isAuthenticated */}
          <Nav.Link as={Link} to={isAuthenticated ? "/about" : "/auth"} className="text-white">
          About Me
          </Nav.Link>
        </Nav>
        <Nav.Link as={Link} to={isAuthenticated ? "/portfolio" : "/auth"} className=""> Portfolio</Nav.Link>
        <Nav.Link as={Link} to={isAuthenticated ? "/contact" : "/auth"} className="text-white">
          Contact
          </Nav.Link>
          <Nav className="mr-auto">
          {/* Conditionally set the 'to' prop based on isAuthenticated */}
          <Nav.Link as={Link} to={isAuthenticated ? "/resume" : "/auth"} className="text-white">
          Resume
          </Nav.Link>
          </Nav>
        <Nav>
          {isAuthenticated ? (
            // Show Logout when auth-cookie present - TP
            <Nav.Link onClick={handleLogout} className="text-white ml-auto">
              Logout
            </Nav.Link>
          ) : (
            // Show Login when auth-cookie is NOT present - TP
            <Nav.Link as={Link} to="/auth" className="text-white ml-auto">
              Login
            </Nav.Link>
          )}
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;