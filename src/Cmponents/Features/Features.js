import React from 'react';
import './Features.css';
import {Button, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

const Features = () => {
    return (
        <section>
            <Container className="features">
                <div className="features_sub">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FontAwesomeIcon icon={faCameraRetro} />
                        </div>
                    </div>
                </div>
                <div className="features_sub">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FontAwesomeIcon icon={faCameraRetro} />
                        </div>
                    </div>
                </div>
                <div className="features_sub">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FontAwesomeIcon icon={faCameraRetro} />
                        </div>
                    </div>
                </div>
                <div className="features_sub">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FontAwesomeIcon icon={faCameraRetro} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Features;