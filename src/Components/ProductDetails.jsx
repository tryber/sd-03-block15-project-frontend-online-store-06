import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Rating from './Rating';

const porductNotFound = () => (
  <div>
    <h4>Produto não encontrado</h4>
    <Link to="/">Página Inicial</Link>
  </div>
);

const haveProperties = (object) => Object.keys(object).length > 0;

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { product } = location.state;
    this.state = { product: product || {} };
  }

  render() {
    const { product } = this.state;
    if (!haveProperties(product)) return porductNotFound();
    const { title, thumbnail, price, ...details } = product;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <figure>
          <img alt="#" src={thumbnail} />
          <figcaption>{`${title} image`}</figcaption>
          <p>{price}</p>
        </figure>
        <section>
          {Object.entries(details).map(([feature, value]) => (
            typeof value === 'string' || typeof value === 'number'
              ? <li key={feature}>{`${feature}: ${value}`}</li> : null
          ))}
        </section>
        <Rating />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
