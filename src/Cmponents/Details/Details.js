import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const [drone, setDrone] = useState()
    const params = useParams();
    const url = `https://warm-chamber-95461.herokuapp.com/product/${params.detailsId}`;
        
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(deone => setDrone(deone))
    },[])

    console.log(drone)

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <div className="details_img_div">
                            <img className="details_img_style" src={drone?.img} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div className="details_text_div">
                            <div className="details_text_div_sub">
                                <h2>{drone?.name}</h2>
                                <h5 className="details_price">TK : {drone?.price}</h5>
                                <Rating
                                    style={{color:'#ffb100'}}
                                    initialRating={drone?.ratings}
                                    fullSymbol="fas fa-star"
                                    emptySymbol="far fa-star"
                                    readonly>
                                </Rating>
                                <br />
                                <br />
                                <p>{drone?.des}</p>
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Details;