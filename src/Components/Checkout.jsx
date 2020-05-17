import React from 'react';
import CartProductList from './CartProductList';
import BuyerInfo from './BuyerInfo';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <CartProductList />
        <BuyerInfo />
      </div>
    );
  }
}

export default Checkout;
