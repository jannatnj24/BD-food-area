import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Recipe = ({r}) => {
    const notify = () => toast("Add to favorite");
    const {name,cookingMethod,rating,ingredients}=r;
    return (
        <div>
            <Container className='pt-5 m-4 card'>
                <Row className='align-items-center'>
                <Col md={6} className=' fw-bold d-flex justify-content-center' >
                    <div className="
                    
                    ">
                        <h1 >{name}</h1>
                    <div className='text-success'>
                        <h2>ingredients</h2>
                        <h5>{ingredients}</h5>
                    </div>
                    <div className='text-success'>
                        <h2>Method</h2>
                        <h5>{cookingMethod}</h5>
                    </div>
                     <div>
                     <div className=' flex-grow-1 d-flex'>
                                   <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> <span className='ms-2'>{rating}</span>
                          </div>
                     </div>
                     <Button variant="primary" onClick={notify}>Favorite</Button>
                      <ToastContainer />
                    </div>
                </Col>
                <Col md={6}>
                    <img className='w-100' src={`https://i.ibb.co/QDDH8jp/images-4.jpg`} alt="" />
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Recipe;