import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Product.css'

function teste(buyListArr, string) {
  const verify = buyListArr.find((elem) => elem.title === string);
  if (verify) return 'In-cart';
  return 'Not-in-cart';
}

class Product extends React.Component {
  render() {
    const { product, buyButton, buyListArr } = this.props;
    const { id, title, price, thumbnail, shipping } = product;
    const freeShipping = shipping.free_shipping;
    return (
      <div className="product">
        <div data-testid="product">
          <img src={thumbnail} alt={`${title} img`} className="thumbnail" />
          <p className='preço'>{`R$ ${price}`}</p>
          <p className='nome'>{title}</p>
          <Link
            data-testid="product-detail-link"
            to={{ pathname: `/products/${id}`, state: product }} className='detalhe'
            >
            Detalhes
          </Link>
        <div className="add">
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={buyButton}
          >
            Adicionar ao Carrinho
          </button>
        </div>
            {freeShipping && <p data-testid="free-shipping" className='frete'>FRETE GRÁTIS</p>}
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  buyButton: PropTypes.func.isRequired,
};

export default Product;
