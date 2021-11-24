import React, {useState} from 'react';
import { ListGroupItem, ListGroup, Item } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../components/ItemCount';


export default function itemListContainer(props){
    return(
        <div className='App tc f3'>
            <Container>
            <Row>
                <Col></Col>
                <Col>
                    <ListGroup horizontal>
                        <ListGroup.Item>{props.shop}</ListGroup.Item>
                        <ListGroup.Item>{props.brand}</ListGroup.Item>
                        <ListGroup.Item>{props.deals}</ListGroup.Item>
                        <ListGroup.Item>{props.departments}</ListGroup.Item>
                    </ListGroup></Col>
                <Col>
                <ItemCount />
                </Col>
            </Row>
            </Container>
        
      </div>
    )
}