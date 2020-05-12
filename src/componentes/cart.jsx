import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      cart: [],
    };
  }

  render() {
    const { empty } = this.state;

    return (
      <div className="cart">
        <img
          data-testid="shopping-cart-button"
          src="../images/carrinho.png"
          alt="carrinho de compras"
        />
        {
          empty ? <div className="Vazio">
            <img src="../images/box.png" alt="Caixa vazia" />
            <h3 data-testid="shopping-cart-empty-message" >Seu carrinho está vazio</h3>
          </div> : 1
        }
      </div>
    );
  }
}

export default Cart;
