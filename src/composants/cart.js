import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    return (
        <>
          <p className='text-white text-end me-5 mt-4'>Fermer</p>
          <Container>
            <h6 className='fs-1 text-white mt-4'>Pannier</h6>
            <ul className='gy-4'>
                <li className='text-white fs-5'>1 Pomme 25€</li>
                <li className='text-white fs-5'>1 Goyave 5€</li>
            </ul>
            <h6 className='fs-1 text-white mt-4'>Total: 30€</h6>
            <Button className='bg-white text-dark my-4'>Vider le pannier</Button>
          </Container>
        </>
    );
  }

  export default Cart;