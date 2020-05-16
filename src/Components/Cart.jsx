import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import box from '../images/box.png';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      buyListArr: [],
    };
    this.changeStateCart = this.changeStateCart.bind(this);
    this.endButton = this.endButton.bind(this);
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

  buyButtonFromMap(elem) {
    return (
      <div>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={() => this.decreaseQnt(elem.title)}
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${elem.qnt}`}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={() => this.increaseQnt(elem.title)}
        >
          +
        </button>
      </div>
    );
  }

  endButton(button) {
    const { empty } = this.state;
    if (empty || !empty) {
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

  }

  render() {
    const { empty, buyListArr } = this.state;
    console.log(buyListArr);
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
            {this.buyButtonFromMap(elem)}
          </div>
        ))}
        {this.endButton('button')}
      </div>
    );
  }
}

export default Cart;
