import React from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';

export default function ItemList({listResult}){
    console.log(listResult);
    return(
        <div>
            
            <Row>                
            {
                listResult.map(data => <Item  title={data.name} src={data.src} model={data.model} price={data.price} id={data.id}/>)
            }  
            </Row>
            
        </div>
    )
}