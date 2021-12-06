import React from 'react';
import Col from 'react-bootstrap/Col';
import Item from './Item';

export default function ItemDetail({dataResult}) {
    
    
    return (
        <div>
            <Col>
            <Item key={dataResult[0].id} title={dataResult[0].name} src={dataResult[0].src} model={dataResult[0].model} price={dataResult[0].price}/>
            </Col>
        </div>
    )
}
