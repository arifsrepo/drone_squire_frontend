import React from 'react';
import { Container } from 'react-bootstrap';
import './FlashPro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faWifi, faVideo } from '@fortawesome/free-solid-svg-icons';

const FlashPro = () => {
    return (
        <Container>
            <section className="flashproduct">
                <div className="flashproduct_sub sub_text">
                    <p className="flashproduct_title">What We Offer</p>
                    <h1>DJI Mavic 2 Pro</h1>
                    <p>A drone that embodies all of DJI's advanced, signature technologies, and redefines aerial photography.</p>
                    <div className="flashpro_icon_div">
                        <div>
                            <FontAwesomeIcon className="flash_icon_holder" icon={faWifi} />
                            <h2>5 ml</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon  className="flash_icon_holder" icon={faClock} />
                            <h2>31 m</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon  className="flash_icon_holder" icon={faVideo} />
                            <h2>12 mp</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <button className="btn"> Buy Now</button>
                </div>
                <div className="flashproduct_sub">
                    <img className="flashpro_img" src="https://i.ibb.co/R2TjszF/product-01-596x515.png" alt="" />
                </div>
            </section>
            <br />
        </Container>
    );
};

export default FlashPro;