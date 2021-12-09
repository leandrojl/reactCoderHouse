import React, {useEffect, useState, useParams} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemDetail from '../components/ItemDetail';


export default function ItemDetailContainer() {
    {/*const [data, setData] = useState([]);

    const {id} = useParams();

    const getData=(idSend)=>{

        fetch('data.json',{
    
          headers : { 
    
            'Content-Type': 'application/json',
    
            'Accept': 'application/json'}
        }
        )
          .then(function(response){
            return response.json();
          }).then(function(myJson) {
            
            const idItem = myJson.find(item => item.id === parseInt(id));

            setData(idItem);

            console.log(idItem);
          });
      }
      useEffect(()=> {

        setTimeout(getData(id),2000);
    
    },[id]);
*/}
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="col-md-12 text-center mt-5">ITEM DETAIL CONTAINER</h2>
                    </Col>
                </Row>
                <Row>
                    <ItemDetail /*dataResult={data}*/ />
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