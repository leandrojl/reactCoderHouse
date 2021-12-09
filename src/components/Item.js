import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/images/1050placa.webp'
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

export default function Item({title, src, model, price, id}){

    let history = useHistory();

    return(
        <div>
                <Col>
                <Card  className="text-center mt-3" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={src}/>
                <Card.Body>
                    <Card.Title className="mt-1">{title}</Card.Title>
                    <Card.Subtitle className="mt-2">{model}</Card.Subtitle>
                    <Card.Title className="mt-1">${price}</Card.Title>
                    <Card.Title className="mt-1">ID: {id}</Card.Title>
                    <Button className="mt-1">SEE MORE</Button>
                </Card.Body>
                </Card>
                </Col>
        </div>
    )
}