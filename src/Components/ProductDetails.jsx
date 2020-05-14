import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
  }

  componentDidMount() {
    const { products, match: { params } } = this.props;
    const product = products.find((product) => product.id === params.id);
    this.setProduct(product);
  }
  
  setProduct(product) {
    this.setState({ product });
  }

  render() {
    const { title, thumbnail, price, ...details } = this.state.product;
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
        <Link to="/cart">Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default ProductDetails;
