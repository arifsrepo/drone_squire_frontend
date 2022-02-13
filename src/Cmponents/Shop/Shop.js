import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(products => setProducts(products))
    },[])
    console.log(products)
    return (
        <Container>
            <section className="allproducts">
                <p style={{marginTop:"20px"}} className="allprotext">Explore All Drone We Have</p>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </section>
        </Container>
    );
};

export default Shop;