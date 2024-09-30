import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Footer(){
    return(
        <Container fluid className='border border-2 border-primary p-2 d-flex flex-column d-flex align-items-center'>
            <p className='text-center'>Pour les plantes de décoration</p>
            <p className='text-center'>Laisser nous votre contact</p>
            <Button className='bg-white text-dark mb-3 w-25'>Vider le pannier</Button>
        </Container>
    )
}

export default Footer;