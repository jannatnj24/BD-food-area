import React, { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import SignInPop from '../SignInPop/SignInPop';



const Login = () => {
    const [error ,setError]=useState('');
    const{SignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
  
  
    const from =location.state?.from?.pathname || '/';
    
  
    const HandelLogin=event=>{
      event.preventDefault();
      const form =event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
      setError('')
  
      
      SignIn(email,password)
      .then(result => {
      
          const LoggedUser = result.user;
          console.log(LoggedUser);
          form.reset();
          navigate(from,{replace :true});
        
        })
        .catch(error => {
          console.log(error);
          setError('Invalid input, please input valid data');
          
        });
    
    }
    return (
        <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase text-center text-danger">Login</h2>
                    <div className="mb-3">
                      <Form onSubmit={HandelLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="text-primary" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="secondary" type="submit">
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account?{" "}
                          <Link to="/Register" className="label-text-alt link link-hover  ml-1"> Register </Link>
                        </p>
                      </div>
                      <p className='text-danger text-center	 fw-bold mt-2'> <small>{error}</small></p>
                    </div>
                  </div>
                
                </Card.Body>
                <div>
            <SignInPop></SignInPop>
          </div>
              </Card>
            </Col>
          </Row>
         
        </Container>
      </div>
    );
};

export default Login;