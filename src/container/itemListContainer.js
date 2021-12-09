import React, {useEffect, useState} from 'react';
import { ListGroupItem, ListGroup, Item } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';

export default function ItemListContainer(){
    const [data, setData] = useState([]);
    
    const getData=()=>
    {
        fetch('data.json'
        ,{
    
            headers : 
            
            { 
        
                'Content-Type': 'application/json',
        
                'Accept': 'application/json'
        
            }
    
        }).then(function(response){
            
            return response.json();
    
        }).then(function(myJson) 
            {
        
                setData(myJson);
        
            });
    
    }
useEffect(()=> {

    setTimeout(getData(),2000);

},[]); 


    return(
        <div className='App tc f3'>
            <Container>

            <Row>

                <Col>

                    <h2 className="col-md-12 text-center mt-5">ITEM LIST CONTAINER</h2>

                </Col>

            </Row>

                <ItemList listResult={data} />

            </Container>
        
      </div>
    )
}