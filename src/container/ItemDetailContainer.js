import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemDetail from '../components/ItemDetail';

export default function ItemDetailContainer() {
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
    
            
    
            return response.json();
    
          })
    
          .then(function(myJson) {
    
            
            setData(myJson);
    
          });
    
      }

      useEffect(()=> {

        setTimeout(getData(),2000);
    
    },[]); 

    return (
        <div>
            <Container>
            <Row>
            <Col>
            <h2 className="col-md-12 text-center mt-5">ITEM DETAIL CONTAINER</h2>
            </Col>
            
            </Row>
            
            <Row>
            <ItemDetail dataResult={data} />
            </Row>
            </Container>
        </div>
    )
}
/*

//FUNCTION TO GET DATA FROM API

function getPosts(parameter){
    return new Promise((resolve, reject)=>{
        
        fetch('URL')
        .then(res => res.json()) //answer from api is converted to JSON
        .then(data => resolve(data))
        .catch(err => reject(err)) //throws error if data can't resolve
    })
    
}
*/

//SEND POST TO UDPATE DATA
/*
function createPost(post){

    return new Promise ((resolve, reject)=>{
        fetch(`URL`, {
            method: 'POST',
            body: JSON.stringify({
                userId: post.userId,
                title: post.title,
                body: post.body

            }),
            headers: {
                'Content-type': 'application/json' //metadata sent to database
            }
        })
    })
}
*/
/*
function deletePost(post){

    return new Promise ((resolve, reject)=>{

        fetch('URL', {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => resolve (data))
        .catch(err => reject(err))
    })
}
*/