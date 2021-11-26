import React from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';

export default function ItemList(){
    return(
        <div>
            
            <Row>                
            <Item />
            <Item />
            <Item />
            <Item />   
            </Row>
            
        </div>
    )
}