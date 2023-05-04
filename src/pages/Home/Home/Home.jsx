import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChefData from '../../../Components/ChefData/ChefData';

const Home = () => {
    return (
        <div>
            <Container className='pt-5 m-4 card'>
                <Row className='align-items-center'>
                <Col md={6} className=' fw-bold d-flex justify-content-center' >
                    <div className="
                    
                    ">
                        <h1 className='text-success'>Bangladeshi Chef<br /> Is The <br /> <span className='text-color'>Best In The World</span></h1>
                    <div className='text-success'>
                        <h5>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</h5>
                    </div>

                    <button className='Get-btn bg-primary rounded'>Know About</button>
                    </div>
                </Col>
                <Col md={6}>
                    <img className='w-100' src={`https://i.ibb.co/QDDH8jp/images-4.jpg`} alt="" />
                </Col>
                </Row>
            </Container>
              
              <div>
                <ChefData></ChefData>
              </div>
        </div>
        
    );
};

export default Home;