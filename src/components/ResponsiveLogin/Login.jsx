import React from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap'
// import './Login.css'
import { FaKey } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'

const Login = () => {
    return (
        <>
            <Container  className='bg-primary'>


                <div className='f_div'>
                    <Row>

                        <Col sm={6}>
                            {/* <form className='d-flex justify-content-center flex-column align-items-center'>
                                <h3 className="logo"><i><FaKey></FaKey></i></h3>
                                <h2>Sign in</h2>
                                <Col as={Row} className="inputBox">




                                    <Col xl={1}>              <i><FaUser></FaUser></i></Col>
                                    <Col xl={3}>             <span className="myBox">Username</span></Col>
                                    <Col xl={8}>              <input type="text" required /></Col>

                                </Col>
                                <Col as={Row} className="inputBox">
                                    <Col xl={1}>              <i ><FaLock></FaLock></i></Col>
                                    <Col xl={3}>              <span>Password</span></Col>
                                    <Col xl={8}>              <input type="password" required /></Col>

                                </Col>
                                <Col as={Row} className="p-0">
                                    <Col xl={8}><span className='myLink'><FaQuestion></FaQuestion>Forgot Password</span></Col>
                                    <Col xl={4}><span className='myLink'><FaUserPlus></FaUserPlus>Sign up</span></Col>
                                </Col>
                                <Col xxl={12} className='input-click'>
                                    <input type="submit" value="Log in" className='input-click' />

                                </Col>
                            </form> */}


                                <h3 className="logo"><i><FaKey></FaKey></i></h3>
                                <h2>Sign in</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type='password' />
                                </Form.Group>
                            </Form>

                              <Row className='d-flex justify-content-center align-items-center ' >
                              <Col xl='auto'><span className='myLink '><FaQuestion></FaQuestion>Forgot Password</span></Col>
                                    <Col xl="auto"><span className='myLink ' ><FaUserPlus></FaUserPlus>Sign up</span></Col>
                              </Row>


                        </Col>
                       


                    </Row>
                </div>


                <Col xxl={6} className='bg-danger'>side B</Col>


            </Container>


            <h1 className="a"> ali</h1>

            <div className="loader1" >
                <span></span>
            </div>



            <div className="container">
                <button className="btn" ><span>BUTTON</span></button>
            </div>


            <button className="btn_1"><span>btn_1</span></button>

        </>
    )
}

export default Login