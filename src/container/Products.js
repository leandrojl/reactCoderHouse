import React from 'react';
import ItemListContainer from './itemListContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

export default function Products() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="col-md-12 text-center mt-3">
                    <h1>THIS IS PRODUCTS PAGE</h1>
                    </Col>
                </Row>
            </Container>

            <ItemListContainer />

            <Container>
                <Row>
                    <Col className="col-md-12 text-center mt-3">
                    <Link to={"/HomePage"} > GO HOME PAGE</Link>
                    </Col>
                </Row>
            </Container>

            
        </div>
    )
}
