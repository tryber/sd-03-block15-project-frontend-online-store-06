import React from 'react';
import PropType from 'prop-types';

function QntButton(props) {
  const { title, qnt, increaseQnt, decreaseQnt, min } = props;
  return (
    <div>
      <button
        type="button"
        data-testid="product-decrease-quantity"
        onClick={() => decreaseQnt(title, -1)}
        disabled={qnt === min}
      >
        <span>-</span>
      </button>
      <p data-testid="shopping-cart-product-quantity">{`Quantidade: ${qnt}`}</p>
      <button
        type="button"
        data-testid="product-increase-quantity"
        onClick={() => increaseQnt(title, 1)}
      >
        <span data-testid="product-detail-add-to-cart" >+</span>
      </button>
    </div>
  );
}

QntButton.defaultProps = { min: null };

QntButton.propType = {
  title: PropType.string.isRequired,
  qnt: PropType.string.isRequired, // number as String
  min: PropType.number, // number as String
  increaseQnt: PropType.func.isRequired,
  decreaseQnt: PropType.func.isRequired,
};

export default QntButton;
