import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLocationDot, faPhone, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="footer">
            <Container className="footer_sub_holder">
                <div className="footer_sub">
                    <div>
                        <h3>D R O N E S Q U I R E</h3>
                        <p className="footer_sub_text">This is your #1 place to shop for the first-class drones and accessories worldwide.</p>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div className="footer_sub">
                    <h4>Contacts</h4>
                    <div className="contact_data">
                        <li className="contact_li"><FontAwesomeIcon className="footer_contact_icon" icon={faLocationDot} /> Mirpur Dhaka, Bangladesh</li>
                        <li className="contact_li"><FontAwesomeIcon className="footer_contact_icon" icon={faPhone} /> 0123456789</li>
                        <li className="contact_li"><FontAwesomeIcon className="footer_contact_icon" icon={faEnvelope} /> Email@email.com</li>
                        <li className="contact_li"><FontAwesomeIcon className="footer_contact_icon" icon={faBook} /> Request More Info</li>
                    </div>
                </div>
                <div className="footer_sub">uuuu</div>
            </Container>
        </footer>
        <div className="footer_tc">
            tearms & conditions
        </div>
        </>
    );
};

export default Footer;