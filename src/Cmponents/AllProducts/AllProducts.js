import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';
import './AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(products => setProducts(products))
    },[])
    console.log(products)

    return (
        <Container>
            <section>
                <div  className="allproducts">
                    <p className="allprotext">Our Great Collection</p>
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
                <div className="explore_btn_div">
                    <button className="btn_product">Explore More</button>
                </div>
            </section>
        </Container>
    );
};

export default AllProducts;