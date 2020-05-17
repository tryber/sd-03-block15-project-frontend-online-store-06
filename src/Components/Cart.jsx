import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import box from '../images/box.png';
import QntButton from './QntButton';


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
    const memoryArrCart = JSON.parse(localStorage.getItem('buyList'));
    this.state = { buyListArr: memoryArrCart || [] };
    this.increaseQnt = this.increaseQnt.bind(this);
    this.decreaseQnt = this.decreaseQnt.bind(this);
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
    if (buyListArr.length === 0) return emptyCart();
    return (
      <div>
        {buyListArr.map(({ title, thumbnail, price, qnt, availableQuantity, freeShipping }) => (
          <div className="cart" key={title}>
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

export default Cart;
