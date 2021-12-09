import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="col-md-12 text-center mt-3">
                    <h1>THIS IS HOME PAGE</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
