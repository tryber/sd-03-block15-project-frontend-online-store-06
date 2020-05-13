import React, { Component } from 'react';
import box from '../images/box.png'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      cart: {
        arr: [],
        qt: 1,
      }
    };
  }

  render() {
    const {empty} = this.state;

    return (
      <div className="cart">
        {
          empty ? <div className="Vazio">
            <img src={box} alt="Caixa-vazia" />
            <h3 data-testid="shopping-cart-empty-message" >Seu carrinho está vazio</h3>
          </div> : 1
        }
      </div>
    );
  }
}

export default Cart;
