import React from 'react';

class CartProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buyListArr: [] };
  }

  componentDidMount() {
    const memoryArrCheckout = JSON.parse(localStorage.getItem('buyList'));
    if (memoryArrCheckout !== null) {
      this.changeStateProductList(memoryArrCheckout);
    }
  }

  getTotal() {
    const { buyListArr } = this.state;
    if (buyListArr === []) return 0;
    const total = buyListArr.reduce((acc, elem) => (
      acc + (Number(elem.qnt) * Number(elem.price))), 0);
    return total;
  }

  changeStateProductList(elem) {
    this.setState({ buyListArr: elem });
  }

  render() {
    const { buyListArr } = this.state;
    return (
      <div>
        <h4>Revise seus Produtos</h4>
        <ul>
          {buyListArr.map((elem) => (
            <div className="cart" key={elem.title}>
              <img src={elem.thumbnail} alt={`${elem.title} img`} />
              <p data-testid="shopping-cart-product-name">{elem.title}</p>
              <p>{`R$ ${elem.price}`}</p>
              <p>{`Quantidade: ${elem.qnt}`}</p>
            </div>
          ))}
        </ul>
        <h4>{`Total: R$ ${this.getTotal()}`}</h4>
      </div>
    );
  }
}

export default CartProductList;
