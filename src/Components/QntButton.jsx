import React from 'react';

function QntButton() {
  return (
    <div>
      <button
        type="button"
        data-testid="product-decrease-quantity"
        onClick={() => this.decreaseQnt(title)}
      >
        -
      </button>
      <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${qnt}`}</p>
      <button
        type="button"
        data-testid="product-increase-quantity"
        onClick={() => this.increaseQnt(title)}
      >
        +
      </button>
    </div>
  );
}

export default QntButton;
