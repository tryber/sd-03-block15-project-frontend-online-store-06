import React from 'react';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={`${title} img`} />
        <p>{title}</p>
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

export default Product;
