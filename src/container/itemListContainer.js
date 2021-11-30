import React, {useEffect, useState} from 'react';
import { ListGroupItem, ListGroup, Item } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';

export default function ItemListContainer(){
    const [data, setData] = useState([]);
    const getData=()=>{

        fetch('data.json'
    
        ,{
    
          headers : { 
    
            'Content-Type': 'application/json',
    
            'Accept': 'application/json'
    
           }
    
        }
    
        )
    
          .then(function(response){
    
            console.log(response)
    
            return response.json();
    
          })
    
          .then(function(myJson) {
    
            console.log(myJson);
            setData(myJson);
    
          });
    
      }



useEffect(()=> {
    setTimeout(getData(),2000);
    
    /*
    fetch('../../public/data.json')
    .then(response => response.json())
    .then(postResponse => setPost(postsResponse));*/

},[]); 


    return(
        <div className='App tc f3'>
            <Container>
            <ItemList listResult={data} />
            <Row>
                <Col>
                
                </Col>
                <Col>
                    <ListGroup horizontal className='mt-5'>
                        <ListGroup.Item>SHOP</ListGroup.Item>
                        <ListGroup.Item>BRANDS</ListGroup.Item>
                        <ListGroup.Item>DEALS</ListGroup.Item>
                        <ListGroup.Item>DEPARTMENTS</ListGroup.Item>
                    </ListGroup></Col>
                <Col>
                
                </Col>
            </Row>
            <Row>
                <Col>
                <ItemCount />
                </Col>
                <Col>
                <ItemCount />
                </Col>
                <Col>
                <ItemCount />
                </Col>
                
                
            </Row>
            </Container>
        
      </div>
    )
}