import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Categorie(){
    return(
        <>
            <Row>
            <Col className='d-flex flex-row justify-content-center p-3' md="12"> 
              <Row className='w-50 border border-success p-2 d-flex flex-row justify-content-center'>
                <Col className='d-flex justify-content-end'>
                  <Form.Select style={{width:'100%'}}>
                      <option>Exterieur</option>
                  </Form.Select>
                </Col>
                <Col>
                   <Button className='bg-secondary-subtle text-dark fw-medium'>Rénitialiser</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
    )
}

export default Categorie;