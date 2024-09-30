import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cart from './cart';
import Categorie from './categories';
import PlantItem from './plantItem'
import Footer from './footer';
import { MdOutlineStar } from "react-icons/md";
// import Image1 from './images/Image1.png'

function ShoppingList() {
  return (
    <Container fluid style={{height:'60vh'}}>
      <Row>
        <Col className='bg-success border border-3 border-warning h-100 p-0' md="3">
          <Cart />
        </Col>
        <Col md="9">
          <Row className='d-flex justify-content-center'>
            <Col className='p-0' md="9">
                <Categorie />
            </Col>
          </Row>
          <Row className='border border-success border-3 h-90 d-flex justify-content-center mx-5 my-1 p-2'>
            <Col md="3">
             <PlantItem image={"images/Image1.jpg"} titre={"Plante1"} info=<MdOutlineStar /> />
            </Col>
            <Col md="3">
              <PlantItem image={"images/Image2.jpg"} titre={"Plante2"} info=<MdOutlineStar />/>
            </Col>
            <Col md="3">
              <PlantItem image={"images/Image3.jpg"} titre={"Plante3"} info=<MdOutlineStar />/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default ShoppingList;