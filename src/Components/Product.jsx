import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  render() {
    const { product, buyButton } = this.props;
    const { id, title, price, thumbnail } = product;
    return (
      <div>
        <div data-testid="product">
          <img src={thumbnail} alt={`${title} img`} />
          <p>{title}</p>
          <p>{`R$ ${price}`}</p>
          <Link
            data-testid="product-detail-link"
            to={{ pathname: `/products/${id}`, state: product }}
          >
            Detalhes
          </Link>
        </div>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={buyButton}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  buyButton: PropTypes.func.isRequired,
};

export default Product;
