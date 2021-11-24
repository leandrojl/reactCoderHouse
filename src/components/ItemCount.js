import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ItemCount() {
    const [counter, setCounter] = useState(0);
    

    function increaseCounter(){
        setCounter(counter +1);
    }
    function decreaseCounter(){
        setCounter(counter - 1);
    }

    return (
        <div>
            <Container>
            <Row>
                
                <Col>
                    
                    <span>{counter}</span>
                    <button onClick={increaseCounter}>+</button>
                    <button onClick={decreaseCounter}>-</button>
                </Col>
                
            </Row>
            </Container>
            
        </div>
    )
}
