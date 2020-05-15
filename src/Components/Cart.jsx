import React, { Component } from 'react';
import box from '../images/box.png';
import QntButton from './QntButton';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      buyListArr: [],
    };
    this.changeStateCart = this.changeStateCart.bind(this);
  }

  componentDidMount() {
    const memoryArrCart = JSON.parse(localStorage.getItem('buyList'));
    if (memoryArrCart !== null) {
      this.changeStateCart(memoryArrCart);
    }
  }

  changeStateCart(elem) {
    this.setState({
      buyListArr: elem,
      empty: false,
    });
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
    const { empty, buyListArr } = this.state;
    if (empty) {
      return (
        <div className="cart">
          <div className="Vazio">
            <img src={box} alt="Caixa-vazia" />
            <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
          </div>
        </div>
      );
    }
    return (
      <div>
        {buyListArr.map((elem) => (
          <div className="cart" key={elem.title}>
            <img src={elem.thumbnail} alt={`${elem.title} img`} />
            <p data-testid="shopping-cart-product-name">{elem.title}</p>
            <p>{`R$ ${elem.price}`}</p>
            <QntButton />
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
