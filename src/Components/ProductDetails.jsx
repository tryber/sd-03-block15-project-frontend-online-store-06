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

const selectProperties = ([feature, value]) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return <li key={feature}>{`${feature}: ${value}`}</li>;
  } else if (typeof value === 'object' && feature === 'shipping') {
    return (
      <li key={'shipping'} data-testid="free-shipping">
        free_shipping: {value['free_shipping'] ? 'YES' : 'NO'}
      </li>
    );
  }
  return null;
}

const updateStorage = (value, title, product) => {
  const { price, thumbnail, available_quantity, shipping } = product;
  const freeShipping = shipping['free_shipping'];
  let newCart = [];
  const cart = JSON.parse(localStorage.getItem('buyList')) || [];
  const alreadyExist = cart.some((product) => product.title === title);
  if (alreadyExist) {
    newCart = cart.map((elem) => (
      elem.title === title ? Object.assign(elem, { qnt: value }) : elem
    ));
  } else {
    newCart = [...cart, { title,  price, thumbnail, available_quantity, freeShipping, qnt: 1 }];
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
    const { qnt, ...product } = this.state.product;
    const newQnt = qnt + variation;
    updateStorage(newQnt, title, { product });
    this.setState({ product: { ...product, qnt: newQnt } });
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
          {Object.entries(details).map(selectProperties)}
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
