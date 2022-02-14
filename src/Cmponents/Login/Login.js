import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const [toggler, setToggler] = useState(false);
    const { googleSignIn, emailSignIn, registerUser, user, email, password, number, setNumber, setName, setUser, saveUser, setEmail, setPassword, error, setError, setAddress, address } = useFirebase();
    const location = useLocation();
    const history = '';
    const redirect_url = location?.state?.from?.pathname || '/home';

    const handleSubmit = e => {
        e.preventDefault();
        if(toggler){
            console.log('calling register')
            registerUser(email, password, address);
        } else {
            emailLogin(email, password)
        }
    }

    const emailLogin = () => {
        emailSignIn(email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            history.push(redirect_url);
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
        setError(null)
    }

    const handlePassChange = e => {
        setPassword(e.target.value)
        setError(null)
    }

    const handleMobile = e => {
        setNumber(e.target.value)
        setError(null)
    }

    const handleAddress = e => {
        setAddress(e.target.value)
        setError(null)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleGoogleLogin = () => {
        googleSignIn()
        .then((result) => {
            const user = result.user;
            setUser(user);
            saveUser(user.email, user.displayName, address, number, 'PUT')
            history.push(redirect_url);
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            setUser({});
        });
    }

    const toggling = e => {
        setToggler(e.target.checked);
    }

    console.log(toggler)



    return (
        <div className="login_div">
            <Container>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <div className="login_form_holder">
                                <h1 className="login_welcome_msg">Welcome</h1>
                                <p>Login to continue</p>
                                {
                                    toggler?<>
                                    <h6>Your Name</h6>
                                    <input onBlur={handleNameChange} className="input_basic" type="text" />
                                    <br /></>:''
                                }
                                <br />
                                <h6>Enter Email Address</h6>
                                <input onBlur={handleEmailChange} className="input_basic" type="text" />
                                <br />
                                <br />
                                <h6>Enter Password</h6>
                                <input onBlur={handlePassChange} className="input_basic" type="password" />
                                <br />
                                <br />
                                <Form.Check 
                                    onChange={toggling}
                                    label={'New User?'}
                                />
                                <input className="login_btn" type="submit" value="Log In" />
                                <br />
                                <button className="btn" onClick={handleGoogleLogin}> Google Login </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;