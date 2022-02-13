import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Contact from '../Contact/Contact';
import FlashPro from '../FlashPro/FlashPro';
import MainBanner from '../MainBanner/MainBanner';
import MultiCarousel from '../MultiCarousel/MultiCarousel';
import WeOffer from '../WeOffer/WeOffer';
import './Home.css';

const Home = () => {
    return (
        <>
            <MainBanner></MainBanner>
            <MultiCarousel></MultiCarousel>
            <AllProducts></AllProducts>
            <FlashPro></FlashPro>
            <Contact></Contact>
        </>
    );
};

export default Home;