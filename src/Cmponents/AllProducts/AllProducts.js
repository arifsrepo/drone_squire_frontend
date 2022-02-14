import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Product from '../Product/Product';
import './AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useState([])
  
    useEffect(() => {
      fetch('https://warm-chamber-95461.herokuapp.com/products')
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
                        products.map(product => <><NavLink className="details_link_style" to={`/details/${product._id}`}><Product product={product}></Product></NavLink></>)
                    }
                </div>
                <div className="explore_btn_div">
                    <NavLink to="/shop"><button className="btn_product">Explore More</button></NavLink>
                </div>
            </section>
        </Container>
    );
};

export default AllProducts;