import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Error = () => {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center">
     <Row>
       <Col xs={12} md={6}>
       <img src={`https://i.ibb.co/y43tkDx/download-1.png`} alt="" />
       </Col>
       <Col xs={12} md={6} className="text-center">
         <h1 className="display-4 text-danger">404 Error</h1>
         <p className="lead">
           Oops! Looks like the page you're looking for doesn't exist.
         </p>
         <p>
           Please check the URL or go back to the <a href="/">homepage</a>.
         </p>
       </Col>
     </Row>
   </Container>
    );
};

export default Error;