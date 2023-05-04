import React from 'react';
import { Col,Container,Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container fluid className='bg-info text-dark py-3'>
      <Row>
        <Col md={4} className='text-center'>
          <h5>About Us</h5>
          <p>We are passionate about bringing the best Bangladeshi recipes to your kitchen.</p>
        </Col>
        <Col md={4} className='text-center'>
          <h5>Contact Us</h5>
          <p>Email: info@bangladeshifoodrecipes.com</p>
          <p>Phone: +880-123-456789</p>
        </Col>
        <Col md={4} className='text-center'>
          <h5>Follow Us</h5>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-3'>
          <p>&copy; 2023 Bangladeshi Food Recipes. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Footer;