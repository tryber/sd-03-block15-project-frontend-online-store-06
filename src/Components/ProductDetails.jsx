import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as generalFunc from '../services/generalFunc';
import Rating from './Rating';
import QntButton from './QntButton';
import LinkToCart from './LinkToCart';
import AsideButton from './AsideButton';

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
  }
  return null;
};

const updateStorage = (value, title, product) => {
  let newCart = [];
  const cart = JSON.parse(localStorage.getItem('buyList')) || [];
  const alreadyExist = cart.some((prod) => prod.title === title);
  if (alreadyExist) {
    newCart = cart.map((elem) => (
      elem.title === title ? Object.assign(elem, { qnt: value }) : elem
    ));
  } else {
    const { price, thumbnail, available_quantity: availableQuantity, shipping } = product;
    const freeShipping = shipping.free_shipping;
    newCart = [...cart, { qnt: 1, title, price, thumbnail, availableQuantity, freeShipping }];
  }
  localStorage.setItem('buyList', JSON.stringify(newCart));
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    if (state) {
      this.state = {
        product: { qnt: takingProperty('qnt', state.title), ...state },
        unitsInCart: generalFunc.unitsInCart(),
        asideButtonArr: [],
      };
    } else {
      this.state = {
        unitsInCart: generalFunc.unitsInCart(),
        asideButtonArr: [],
      };
    }
    this.changeQnt = this.changeQnt.bind(this);
    this.updateLinkCart = generalFunc.updateLinkCart.bind(this);
  }

  componentDidUpdate() {
    this.changingTheAsideButtonArr();
  }

  changingTheAsideButtonArr() {
    const asideButtonArrFromDetails = JSON.parse(localStorage.getItem('buyList'));
    this.setState({ asideButtonArr: asideButtonArrFromDetails });
  }

  changeQnt(title, variation) {
    const { qnt, ...product } = this.state.product;
    const newQnt = qnt + variation;
    updateStorage(newQnt, title, product);
    this.updateLinkCart(variation);
    this.setState({ product: { ...product, qnt: newQnt } });
  }

  render() {
    const { product, unitsInCart, asideButtonArr } = this.state;
    if (!haveProperties(product)) return porductNotFound();
    const { title, thumbnail, price, qnt, available_quantity: aQ, shipping, ...others } = product;
    const freeShipping = shipping.free_shipping;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <figure>
          <img alt="#" src={thumbnail} />
          <figcaption>{`${title} image`}</figcaption>
          <p>Price: {price}</p>
          {freeShipping && <p data-testid="free-shipping">FRETE GRÁTIS</p>}
        </figure>
        <section>
          {Object.entries(others).map(selectProperties)}
        </section>
        <Rating />
        <QntButton
          title={title}
          qnt={qnt}
          min={0}
          max={aQ}
          increaseQnt={this.changeQnt}
          decreaseQnt={this.changeQnt}
        />
        <LinkToCart unitsInCart={unitsInCart} />
        <AsideButton asideButtonArr={asideButtonArr} />
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
