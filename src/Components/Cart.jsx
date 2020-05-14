import React, { Component } from 'react';
import box from '../images/box.png';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      buyListArr: [],
    };
  }

  componentDidMount() {
    const valor = localStorage.getItem('buyList');
    console.log(valor);
    const memoryArr = JSON.parse(valor);
    if (memoryArr !== null) {
      this.setState({
        buyListArr: memoryArr,
        empty: false,
      });
    }
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
          <div className="cart">
            <img src={elem.thumbnail} alt={`${elem.title} img`} />
            <p data-testid="shopping-cart-product-name">{elem.title}</p>
            <p>{`R$ ${elem.price}`}</p>
            <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${elem.qnt}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
