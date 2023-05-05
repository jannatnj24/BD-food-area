import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
                 
                 <div>
                 <ChefData/>
                 </div>
                 <div><h2 className='text-parimary text-center m-2'> Contact Information</h2></div>
                 <Container className=' card Bg-primary mt-4 mb-4'>
                    
                 <Container>
                             
                              <Row>
                                <Col sm><Col sm>
                                <Col className='mt-4' md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" height={240} src={`https://i.ibb.co/gzmJ7Rs/chef-1.jpg`} />
                                    <Card.Body className='bg-light'>
                                        <Card.Title className='text-danger fw-bold '> Chef Ahmed Hossain </Card.Title>

                                        <div>
                                            <p className='text-dark'> Dhaka,Mirpur-12 </p>
                                            <p className='text-dark'>Email:12ygug@gmail.com</p>
                                            <p className='text-dark'>Phone:0198576856 </p>
                                        </div>

                                        <button className='bg-primary'>About</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col></Col>
                                <Col sm><Col sm>
                                <Col className='mt-4' md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" height={240} src={`https://i.ibb.co/RzgbrpV/chef-2.jpg`} />
                                    <Card.Body className='bg-light'>
                                        <Card.Title className='text-danger fw-bold '>Chef Fakruddin </Card.Title>

                                        <div>
                                            <p className='text-dark'> Dhaka,Mirpur-12 </p>
                                            <p className='text-dark'>Email:12ygug@gmail.com</p>
                                            <p className='text-dark'>Phone:0198576856 </p>
                                        </div>

                                        <button className='bg-primary'>About</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col></Col>
                                <Col sm><Col sm>
                                <Col className='mt-4' md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" height={240} src={`https://i.ibb.co/BVkytH3/chef3.jpg`} />
                                    <Card.Body className='bg-light'>
                                        <Card.Title className='text-danger fw-bold '> Manik Miah </Card.Title>

                                        <div>
                                            <p className='text-dark'> Dhaka,Mirpur-12 </p>
                                            <p className='text-dark'>Email:12ygug@gmail.com</p>
                                            <p className='text-dark'>Phone:0198576856 </p>
                                        </div>

                                          <button className='bg-primary'>About</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col></Col>
                              </Row>
                            </Container>
                 </Container>
        </div>
        
    );
};

export default Home;