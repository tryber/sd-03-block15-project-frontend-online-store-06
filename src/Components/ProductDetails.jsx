import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import QntButton from './QntButton';

const porductNotFound = () => (
  <div>
    <h4>Produto não encontrado</h4>
    <Link to="/">Página Inicial</Link>
  </div>
);

const haveProperties = (object) => Object.keys(object).length > 0;

const takingProperty = (wanted, value, key = 'title') => {
  const list = JSON.parse(localStorage.getItem('buyList'));
  if (list) {
    const product = list.find((prod) => prod[key] === value);
    if (product) return product[wanted];
  }
  return 0;
}

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state } } = this.props;
    this.state = { product: { qnt: takingProperty('qnt', state.title), ...state } || {} };
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
    if (!haveProperties(this.state)) return porductNotFound();
    const { title, thumbnail, price, qnt, ...details } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <figure>
          <img alt="#" src={thumbnail} />
          <figcaption>{`${title} image`}</figcaption>
          <p>{price}</p>
        </figure>
        <section>
          {Object.entries(details).map(([feature, value]) => (
            typeof value === 'string' || typeof value === 'number'
              ? <li key={feature}>{`${feature}: ${value}`}</li> : null
          ))}
        </section>
        <Rating />
        <QntButton 
          title={title}
          qnt={qnt}
          increaseQnt={this.increaseQnt}
          decreaseQnt={this.decreaseQnt}
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
