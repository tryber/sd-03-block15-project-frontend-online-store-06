import React from 'react';
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
        <Link
          data-testid="product-detail-link"
          path={`/products/${title}`}
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

export default Product;
