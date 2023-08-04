import React from 'react'
import "./LoginBox.css"
import {FaKey} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaLock} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import {FaQuestion} from 'react-icons/fa'

const LoginBox = () => {
    return (
        
            
            <div class="container">
                <div class="box">
                <div class="cover"></div>
                <div class="cover-border"></div>
                    <div class="shadow"></div>
                    <div class="content">
                        <div class="form">
                            <h3 class="logo"><i class="fa-solid fa-key"></i><FaKey></FaKey></h3>
                            <h2>Sign in</h2>
                            <div class="inputBox">
                                <input type="text" required />
                                <i><FaUser></FaUser></i>
                                
                                <span class="myBox">Username</span>
                            </div>
                            <div class="inputBox">
                                <input type="password" required />
                                <i ><FaLock></FaLock></i>
                                
                                <span>Password</span>
                            </div>
                            <div class="links">
                                <span href="#"><i><FaQuestion></FaQuestion></i>Forgot Password</span>
                                <span href="#"><i><FaUserPlus></FaUserPlus></i>Sign up</span>
                            </div>
                            <div class="inputBox">
                                <input type="submit" value="Log in" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default LoginBox