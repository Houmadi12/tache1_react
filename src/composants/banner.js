import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaLeaf } from "react-icons/fa";
import { PiTreeFill } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
    return (
      <Navbar className="bg-body-tertiary border border-danger border-2 p-2">
        <Container fluid className='d-flex justify-content-between fs-1 text-success'>
            <PiTreeFill />
            <Navbar.Brand href="#home" className='fs-2 fw-medium'> <FaLeaf className='text-success'/> La maison jungle </Navbar.Brand>
        </Container>
    </Navbar>
    );
  }
  

  export default Banner;