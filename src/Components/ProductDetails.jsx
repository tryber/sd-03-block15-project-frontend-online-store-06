import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import QntButton from './QntButton';

const porductNotFound = () => (
  <div>
    <h4>Produto não encontrado</h4>
    <Link to="/">Página Inicial</Link>
  </div>
);

const haveProperties = (object) => Object.keys(object).length > 0;

const takingProperty = (wanted, value, key = 'title') => {
  const list = JSON.parse(localStorage.getItem('buyList')) || [];
  const product = list.find((prod) => prod[key] === value);
  if (product) {
    return product[wanted];
  }
  return 0;
};

const updateStorage = (value, title, price, thumbnail, available_quantity) => {
  let newCart = [];
  const cart = JSON.parse(localStorage.getItem('buyList')) || [];
  const alreadyExist = cart.some((product) => product.title === title);
  if (alreadyExist) {
    newCart = cart.map((elem) => (
      elem.title === title ? Object.assign(elem, { qnt: value }) : elem
    ));
  } else {
    newCart = [...cart, { title, price, thumbnail, available_quantity, qnt: 1 }];
  }
  localStorage.setItem('buyList', JSON.stringify(newCart));
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    if (state) {
      this.state = { product: { qnt: takingProperty('qnt', state.title), ...state } };
    } else this.state = {};
    this.changeQnt = this.changeQnt.bind(this);
  }

  changeQnt(title, variation) {
    const { qnt, price, thumbnail, available_quantity, ...product } = this.state.product;
    const newQnt = qnt + variation;
    updateStorage(newQnt, title, price, thumbnail, available_quantity);
    this.setState({ product: { ...product, price, thumbnail, qnt: newQnt } });
  }

  render() {
    const { product } = this.state;
    if (!haveProperties(product)) return porductNotFound();
    const { title, thumbnail, price, qnt, ...details } = product;
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
        <QntButton
          title={title}
          qnt={qnt}
          min={0}
          max={this.state.product.available_quantity}
          increaseQnt={this.changeQnt}
          decreaseQnt={this.changeQnt}
        />
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
