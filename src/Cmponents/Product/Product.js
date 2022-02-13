import React from 'react';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, ratings, price } = props.product;
    
    return (
        <div className="mcarusel">
            <img className="mcarusel_img" src={img} alt="" />
            <div className="mcarusel_text">
            <h3>{name}</h3>
            <h5>TK :{price}</h5>
            <Rating
                style={{color:'#ffb100'}}
                initialRating={ratings}
                fullSymbol="fas fa-star"
                emptySymbol="far fa-star"
                readonly>
            </Rating>
            </div>
        </div>
    );
};

export default Product;