import React from 'react';
import './MultiCarousel.css';
import Mcarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';

const MultiCarousel = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(products => setProducts(products))
  },[])
  console.log(products)

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <Container>
            <h1>Featured products</h1>
            <br />
            <Mcarousel responsive={responsive}>
              {
                products.map(product => <Product product={product}></Product>)
              }
            </Mcarousel>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem possimus atque deserunt culpa ex tempore dolores corrupti dolorem fugiat obcaecati, enim illum aut, recusandae dolore.</p>
            <br />
        </Container>
    );
};

export default MultiCarousel;