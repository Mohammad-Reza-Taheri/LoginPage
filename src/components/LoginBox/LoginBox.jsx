import React from 'react'
import "./LoginBox.css"
import {FaKey} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaLock} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import {FaQuestion} from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const LoginBox = () => {
    return (
        
            
            <Container >
                <div className="box">
                <div className="cover"></div>
                <div className="cover-border"></div>
                    <div className="shadow"></div>
                    <div className="content">
                        <div className="form">
                            <h3 className="logo"><i><FaKey></FaKey></i></h3>
                            <h2>Sign in</h2>
                            <div className="inputBox">
                                <input type="text" required />
                                <i><FaUser></FaUser></i>
                                
                                <span className="myBox">Username</span>
                            </div>
                            <div className="inputBox">
                                <input type="password" required />
                                <i ><FaLock></FaLock></i>
                                
                                <span>Password</span>
                            </div>
                            <div className="links">
                                <span href="#"><i><FaQuestion></FaQuestion></i>Forgot Password</span>
                                <span href="#"><i><FaUserPlus></FaUserPlus></i>Sign up</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Log in" />

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
       
    )
}

export default LoginBox