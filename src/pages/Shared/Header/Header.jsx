import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Components/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const menuClass = 'text-light fw-bold text-decoration-none normal-case text-xl rounded-3 px-4 py-2 border-3'
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    
    if(loading) return <h1>Loading...</h1>
    return (
        <div>
            <div>
                <Navbar className='bg-info mt-1 text-white  ' expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">  <h1 className='title-color'> BD Food Area</h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0 "
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>

                            <Nav className="mx-auto gap-4">
                                 
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'bg-secondary ' + menuClass : menuClass
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/Blog"
                                    className={({ isActive }) =>
                                        isActive ? 'bg-secondary ' + menuClass : menuClass
                                    }
                                >
                                    Blog
                                </NavLink>
                            </Nav>
                            <Nav className='gap-2'>
                                {
                                    user && <img className='avatar rounded-circle' src={user.photoURL} alt={user.displayName} />
                                }
                                {user ?
                                    <Button onClick={handleLogOut} variant="info">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;