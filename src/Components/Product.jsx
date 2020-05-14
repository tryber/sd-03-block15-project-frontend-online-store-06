import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={`${title} img`} />
        <p>{title}</p>
        <p>{`R$ ${price}`}</p>
        <Link data-testid="product-detail-link" to={`/products/${title}`}>
          Detalhes
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
