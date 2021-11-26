import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../images/handshake.jpg'
import {Card} from 'react-bootstrap';

export default function Item(){
    return(
        <div>
                <Col>
                <Card  className="text-center mt-3" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={img1}/>
                <Card.Body>
                    <Card.Title>Product ###</Card.Title>
                </Card.Body>
                </Card>
                </Col>
        </div>
    )
}