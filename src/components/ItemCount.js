import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';


export default function ItemCount() {
    const [counter, setCounter] = useState(0);


    function increaseCounter(){
        setCounter(counter +1);
    }
    function decreaseCounter(){
        setCounter(counter - 1);
    }

    return (
        <div >
            <Container className='mt-5'>
            <Row>
                <Col>
                <Card  className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div className='mt-4 mb-3'> 
                    
                    <Row>
                        <Col>
                        <Button onClick={increaseCounter} variant="primary" size="lg">+</Button>
                        </Col>
                        <Col>
                        <span className="">{counter}</span>

                        </Col>
                        <Col>
                        <Button onClick={decreaseCounter} variant="danger" size="lg">-</Button>
                        </Col>
                    </Row>  
                    
                    
                    
                    </div>
                    <Button className="mt-2" variant='primary' size='lg'>ADD TO CART</Button>
                </Card.Body>
                </Card>
                </Col>
                
              
                
            </Row>
            </Container>
            
        </div>
    )
}
