import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyListArr: [],
      updateList: false,
    };
    this.buyButton = this.buyButton.bind(this);
  }

  componentDidMount() {
    const memoryArr = JSON.parse(localStorage.getItem('buyList'));
    if (memoryArr !== null) {
      this.setState({
        buyListArr: memoryArr,
        updateList: true,
      });
    }
  }

  componentDidUpdate() {
    const { buyListArr } = this.state;
    localStorage.setItem('buyList', JSON.stringify(buyListArr));
  }

  buyButton(x, y, z) {
    const { buyListArr, updateList } = this.state;
    if (updateList) {
      const check = buyListArr.findIndex((elem) => elem.title === x);
      if (check !== -1) {
        console.log(check);
        const newArr = buyListArr.map((elem) => {
          if (elem.title === x) {
            return Object.assign(elem, { qnt: Number(elem.qnt) + 1 });
          }
          return elem;
        });
        this.setState({ buyListArr: newArr });
      } else {
        const obj = { title: x, price: y, thumbnail: z, qnt: 1 };
        const newArr = [...buyListArr, obj];
        this.setState({ buyListArr: newArr });
      }
    }
    if (!updateList) {
      const obj = { title: x, price: y, thumbnail: z, qnt: 1 };
      const newArr = [...buyListArr, obj];
      this.setState({ buyListArr: newArr, updateList: true });
    }
  }


  render() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;
    return (
      <div>
        <div data-testid="product">
          <img src={thumbnail} alt={`${title} img`} />
          <p>{title}</p>
          <p>{`R$ ${price}`}</p>
          <Link
            data-testid="product-detail-link"
             to={{ pathname: `/products/${id}`, state: product }}
           >
            Detalhes
          </Link>
        </div>
        <div>
          <button type="button" data-testid="product-add-to-cart" onClick={() => this.buyButton(title, price, thumbnail)}>Adicionar ao Carrinho</button>
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
};

export default Product;
