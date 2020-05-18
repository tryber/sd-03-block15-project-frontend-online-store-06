import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import QntButton from './QntButton';
import box from '../images/box.png';


function endButton() {
  return (
    <Link to="checkout">
      <button
        data-testid="checkout-products"
        type="button"
      >
        Finalizar Compra
      </button>
    </Link>
  );
}

const emptyCart = () => (
  <div className="cart">
    <div className="Vazio">
      <img src={box} alt="Caixa-vazia" />
      <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
    </div>
  </div>
);

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { buyListArr: [] };
    this.increaseQnt = this.increaseQnt.bind(this);
    this.decreaseQnt = this.decreaseQnt.bind(this);
  }

  componentDidMount() {
    const { full, asideButtonArr } = this.props;
    if (full) {
      const memoryArrCart = JSON.parse(localStorage.getItem('buyList'));
      this.setState({ buyListArr: memoryArrCart });
    }
    if (!full) {
      this.setState({ buyListArr: asideButtonArr });
    }
  }

  decreaseQnt(obj) {
    const { buyListArr } = this.state;
    const newArr = buyListArr.map((elem) => {
      if (elem.title === obj && elem.qnt > 1) {
        return Object.assign(elem, { qnt: Number(elem.qnt) - 1 });
      }
      return elem;
    });
    this.setState({ buyListArr: newArr });
  }

  increaseQnt(obj) {
    const { buyListArr } = this.state;
    const newArr = buyListArr.map((elem) => {
      if (elem.title === obj) {
        return Object.assign(elem, { qnt: Number(elem.qnt) + 1 });
      }
      return elem;
    });
    this.setState({ buyListArr: newArr });
  }

  render() {
    const { buyListArr } = this.state;
    const { full, asideButtonArr } = this.props;
    const Arr = full ? buyListArr : asideButtonArr;
    if (buyListArr.length === 0) return emptyCart();
    return (
      <div>
        {Arr.map(({ title, thumbnail, price, qnt, availableQuantity, freeShipping }) => (
          <div className={`cart ${full ? 'aside' : ''}`} key={title}>
            <img src={thumbnail} alt={`${title} img`} />
            <p data-testid="shopping-cart-product-name">{title}</p>
            <p>{`R$ ${price}`}</p>
            {freeShipping && <p data-testid="free-shipping">FRETE GRÁTIS</p>}
            <QntButton
              title={title}
              qnt={qnt}
              min={1}
              max={availableQuantity}
              increaseQnt={this.increaseQnt}
              decreaseQnt={this.decreaseQnt}
            />
          </div>
        ))}
        {endButton()}
      </div>
    );
  }
}

Cart.defaultProps = { full: true };

Cart.propTypes = { full: PropTypes.bool };

export default Cart;
