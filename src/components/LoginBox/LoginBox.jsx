import React from 'react'
import "./LoginBox.css"

const LoginBox = () => {
    return (
        <div>
            
             <div class="container">
                <div class="box">
                    <div class="cover"></div>
                    <div class="shadow"></div>
                    <div class="content">
                        <div class="form">
                            <h3 class="logo"><i class="fa-solid fa-key"></i></h3>
                            <h2>Sign in</h2>
                            <div class="inputBox">
                                <input type="text" required />
                                <i class="fa-solid fa-user"></i>
                                <span class="myBox">Username</span>
                            </div>
                            <div class="inputBox">
                                <input type="password" required />
                                <i class="fa-solid fa-lock"></i>
                                <span>Password</span>
                            </div>
                            <div class="links">
                                <span href="#">Forgot Password<i class="fa-solid fa-question"></i></span>
                                <span href="#"><i class="fa-solid fa-user-plus"></i>Sign up</span>
                            </div>
                            <div class="inputBox">
                                <input type="submit" value="Log in" />

                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default LoginBox
