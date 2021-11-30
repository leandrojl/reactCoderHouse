import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/images/shopping-cart.png'

export default function cartWidget(){
    return(
        <div>
            <Row>
                <Col>
                <img className='ml-3 mr-4' style={{ width: '5rem' }} src={img1}/>
                </Col>
            </Row>
        </div>
    )
}