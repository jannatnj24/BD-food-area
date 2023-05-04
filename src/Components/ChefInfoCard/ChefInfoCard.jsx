import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefInfoCard = ({info}) => {
    const {id,nameChef,picture,experience,recipes,likes}=info;
    return (
       
        
        <Col className='mt-4'   md={4}>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" height ={240} src={picture} />
      <Card.Body className='bg-light'>
       <Card.Title className='text-danger fw-bold '>{nameChef}</Card.Title>
   
          <div>
          <p className='text-dark'> experience : {experience}Year</p> 
           <p className='text-dark'>recipes :{recipes}</p>
          <p className='text-dark'>likes :{likes}</p>
          </div>
    
      
          <Link to={`/ViewRecipe/${id}`}><Button variant="primary">View Recipes</Button></Link>
  </Card.Body>
</Card>
</Col>
    );
};

export default ChefInfoCard;