import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChefData from '../../../Components/ChefData/ChefData';

const Home = () => {
    return (
        <div>
            <Container className='pt-5 m-4 card Bg'>
                <Row className='align-items-center Bg'  >
                <Col md={6} className=' fw-bold d-flex justify-content-center Bg' >
                    <div className="
                    text-dark
                    ">
                        <h1 className=''>Bangladeshi Chef<br /> Is The <br /> <span className='text-color'>Best In The World</span></h1>
                    <div className=''>
                        <h5>A chef is a professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</h5>
                    </div>

                    <button className='Get-btn bg-info rounded'>Know About</button>
                    </div>
                </Col>
                <Col md={6}>
                    <img className='w-100 mt-4' src={`https://i.ibb.co/QDDH8jp/images-4.jpg`} alt="" />
                </Col>
                </Row>
            </Container>
                 <ChefData/>
        </div>
        
    );
};

export default Home;