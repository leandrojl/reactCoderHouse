import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/images/1050placa.webp'
import {Card} from 'react-bootstrap';

export default function Item({title, src, model, price}){
    return(
        <div>
                <Col>
                <Card  className="text-center mt-3" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={src}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{model}</Card.Subtitle>
                    <Card.Title>${price}</Card.Title>
                </Card.Body>
                </Card>
                </Col>
        </div>
    )
}