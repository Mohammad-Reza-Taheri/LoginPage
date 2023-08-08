import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import './Login2.css'
const Login2 = () => {
    return (
        <Container fluid className='bg-success ' >

            <Row className='bg-warning h50p'>
                <Col md={2} className='d-none d-md-flex justify-content-center align-items-center '>Nav logo</Col>
                <Col md={7} className='d-flex justify-content-center align-items-center bg-secondary'>welcome to my site</Col>
                <Col md={3} className='d-none d-md-flex justify-content-center align-items-center'>login & sign up</Col>
            </Row>

            <Row className='bg-primary'>
                <Col xs={3} md={{span:6,offset:3}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label column >Username</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>password</Form.Label>
                            <Form.Control type='password' />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={6}>ali</Col>
                <Col xs={6}>ali</Col>
            </Row>



        </Container>
    )
}

export default Login2