import React from 'react';
import './MainBanner.css';
import { Carousel, Container} from 'react-bootstrap';

const MainBanner = () => {
    return (
        <Container>
            <section className="mainbanner">
                        <div className="mainbanner_sub text_holder">
                            <div className="text_holder_main">
                                <p>Taking a New Approach to Airspace</p>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi labore porro laudantium odit nostrum voluptate nisi mollitia molestiae saepe molestias officia animi ratione sint pariatur tenetur maiores assumenda enim, totam cupiditate voluptatem, error inventore. A enim accusamus dicta corporis in?</p>
                        </div>
                        <div className="mainbanner_sub carusel_holder">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 carusel_ig"
                                    src="https://i.ibb.co/cLvJnGn/Pik-Png-com-drone-png-transparent-4068761.png"
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 carusel_ig"
                                    src="https://i.ibb.co/H48Br11/Pik-Png-com-drone-png-533494.png"
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 carusel_ig"
                                    src="https://i.ibb.co/TYMhzdm/Pik-Png-com-drone-png-532953.png"
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
            </section>
        </Container>
    );
};

export default MainBanner;