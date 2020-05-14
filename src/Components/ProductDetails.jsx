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

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      foundOrPending: true,
    };
  }

  componentDidMount() {
    this.findProduct();
  }

  findProduct() {
    const { products, match: { params } } = this.props;
    const product = products.find((prod) => prod.id === params.id);
    if (product) return this.setState({ product, foundOrPending: true });
    return this.setState({ foundOrPending: false });
  }

  render() {
    const { product, foundOrPending, ...ratings } = this.state;
    if (!foundOrPending) return porductNotFound();
    const { title, thumbnail, price, ...details } = product;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <figure>
          <img alt="#" src={thumbnail} />
          <figcaption>{title} image</figcaption>
          <p>{price}</p>
        </figure>
        <section>
          {Object.entries(details).map(([feature, value]) => (
            typeof value === 'string' || typeof value === 'number' ?
              <li key={feature}>{feature}: {value}</li> : null
          ))}
        </section>
        <Rating />
      </div>
    );
  }
}

ProductDetails.defaultProps = { products: [] };

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired },
  ).isRequired,
};

export default ProductDetails;
