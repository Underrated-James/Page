// Home.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1>Welcome to My Profile</h1>
                    <p>
                        This is a brief introduction about myself. I am passionate about web development and technology.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
