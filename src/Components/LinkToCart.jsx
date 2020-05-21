import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartImage from '../images/carrinho.png';
import './LinkToCart.css';

function LinkToCart(props) {
  return (
    <div className="carrinho">
      <div data-testid="shopping-cart-size" className="number">
        {props.unitsInCart}
      </div>
      <Link to="/cart" data-testid="shopping-cart-button">
        <img src={cartImage} alt="cart-button" width="40px" />
      </Link>
    </div>
  );
}

LinkToCart.propTypes = { unitsInCart: PropTypes.number.isRequired };

export default LinkToCart;
