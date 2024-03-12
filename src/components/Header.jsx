import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../output.css';

const Header = () => {

  const currentPage = useLocation().pathname;
//Header with links that chages them depending on the page
  return (
    <header>
      <Navbar className="flex h-12 items-center space-x-11 bg-gray-200 max-w-full text-center" >
          <Nav className="mr-auto container flex flex-row">
            <Nav.Link as={Link} to={"/about"} className={currentPage === "/about" ? "text-black basis-1/4 underline  " : "text-black basis-1/4  hover:text-gray-300 hover:underline"}>About Me </Nav.Link>
            <Nav.Link as={Link} to={"/portfolio"} className={currentPage === "/portfolio" ? "text-black basis-1/4 underline  " : "text-black basis-1/4  hover:text-gray-300 hover:underline"}> Portfolio </Nav.Link>
            <Nav.Link as={Link} to={"/contact"} className={currentPage === "/contact" ? "text-black basis-1/4 underline  " : "text-black basis-1/4  hover:text-gray-300 hover:underline"}> Contact </Nav.Link>
            <Nav.Link as={Link} to={"/resume"} className={currentPage === "/resume" ? "text-black basis-1/4 underline " : "text-black basis-1/4  hover:text-gray-300 hover:underline"}> Resume</Nav.Link>
          </Nav>
      </Navbar>
    </header>
  );
};

export default Header;