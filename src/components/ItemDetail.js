import React from 'react';
import Col from 'react-bootstrap/Col';
import Item from './Item';

export default function ItemDetail({dataResult}) {
    
    
    return (
        <div>
            <Col className="col-md-12">
            <Item title={dataResult.title} src={dataResult.src} model={dataResult.model} price={dataResult.price} />
            </Col>
        </div>
    )
}
