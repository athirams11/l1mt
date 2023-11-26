import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Illustration } from '../assets/illustration.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Google } from '../assets/google.svg';
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';

function SignIn() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const [validated, setValidated] = useState(false);

    const setFormData = (event) => {
        const { value, id } = event.target
        setForm({ ...form, [id]: value })
    }

    const isEmpty = (checkString) => {
        try {
            return (
                checkString === "" || checkString === null || checkString.length === 0
            );
        } catch (e) {
            return true;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEmpty(form.username) || isEmpty(form.password)) {
            setValidated(true)
        }
        else {
            navigate("/home")
        }
    };


    return (
        <Container className='h-100'>
            <Row className='h-100'>
                <Col className='sm-hidden col-lg-2 col-sm-12'></Col>
                <Col className="mx-40 col-sm-12 col-md-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                    <div className='w-100 text-start sm-flex-center'>
                        <h2 className='text-color'>Sign In</h2>
                    </div>
                    <span className='my-4 w-100 text-start sm-flex-center text-color fw-bold'>New user?
                        <a className="text-decoration-none" href="/" > Create an account</a>
                    </span>
                    <Form className='w-100 text-start' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control type="text" placeholder="Username or email"
                                onChange={(e) => setFormData(e)} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid username or email
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control type="password" placeholder="Password"
                                onChange={(e) => setFormData(e)} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="keepme">
                            <Form.Check
                                type="checkbox"
                                id="keepMe"
                                label="Keep me signed in"
                                value={false}
                            />
                        </Form.Group>
                        <Button className='w-100' variant="dark" type="submit">Sign In</Button>
                    </Form>
                    <h6 className='my-4 w-100 border-bottom border-muted text-color'>
                        <span className='px-3 bg-white font-sm fw-bold'>Or Sign In With</span>
                    </h6>
                    <div className='grid text-center my-4'>
                        <Google className='me-3' />
                        <Facebook className='me-3' />
                        <LinkedIn className='me-3' />
                        <Twitter className='me-3' />
                    </div>
                </Col>
                <Col className='sm-hidden col-sm-12 col-lg-7 d-flex justify-content-center align-items-center'>
                    <Illustration />
                </Col>
            </Row>
        </Container>
    );
}

export default SignIn;