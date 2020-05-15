import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartImage from '../images/carrinho.png';

function LinkToCart(props) {
  return (
    <div>
      <div>{props.unitsInCart}</div>
      <Link to="/cart" data-testid="shopping-cart-button">
        <img src={cartImage} alt="cart-button" />
      </Link>
    </div>
  );
}

LinkToCart.defaultProps = { unitsInCart: 0 };

LinkToCart.propTypes = { unitsInCart: PropTypes.number };

export default LinkToCart;
