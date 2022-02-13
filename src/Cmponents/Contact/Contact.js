import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="contact_section">
            <Container>
                <Row>
                    <Col>
                        <div className="contact_msg_div">
                            <br />
                            <h1 style={{color:'#51628f'}}>Get in touch with our managers today</h1>
                            <br />
                            <p>Have A Question?</p>
                            <br />
                            <h4><FontAwesomeIcon className="contact_icon" icon={faPhone} /> 0123456789</h4>
                            <br />
                            <p>We are always there to answer your question</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="contact_form_div">
                            <div className="contact_form">
                                <div className="contact_form_head">Ask us anything!</div>
                                <div className="contact_form_body">
                                    <br />
                                    <FloatingLabel controlId="floatingTextarea" label="Your Name" className="mb-3 float_controll">
                                        <Form.Control as="textarea" placeholder="Your Name" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingTextarea" label="Email Address" className="mb-3 float_controll">
                                        <Form.Control as="textarea" placeholder="Email Address" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingTextarea" label="Phone Number" className="mb-3 float_controll">
                                        <Form.Control as="textarea" placeholder="Phone Number" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingTextarea2" label="Leave a comment here" className="float_controll">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                    <br />
                                    <button className="send_btn">Send</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;