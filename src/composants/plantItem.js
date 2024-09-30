import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CareScare from './careScale';

function PlantItem(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} className='img-fluid'/>
      <Card.Body>
        <Card.Title>{props.titre}</Card.Title>
        <Card.Text>
          <div className='text-success'>
            <CareScare info={props.info} />
          </div>
          <div className='text-warning'>
            <CareScare info={props.info} />
          </div>
        </Card.Text>
        <Button variant="primary">Ajouter</Button>
      </Card.Body>
    </Card>
  );
}

export default PlantItem;