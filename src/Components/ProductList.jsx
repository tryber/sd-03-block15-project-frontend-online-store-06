import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buyListArr: [] };
    this.buyButton = this.buyButton.bind(this);
  }

  componentDidMount() {
    const memoryArrProductList = JSON.parse(localStorage.getItem('buyList'));
    if (memoryArrProductList !== null) {
      this.changeStateProductList(memoryArrProductList);
    }
  }

  componentDidUpdate() {
    const { buyListArr } = this.state;
    localStorage.setItem('buyList', JSON.stringify(buyListArr));
  }

  changeStateProductList(elem) {
    this.setState({ buyListArr: elem });
  }

  buyButton(x, y, z) {
    const { buyListArr } = this.state;
    const check = buyListArr.find((elem) => elem.title === x);
    if (check) {
      const newArr = buyListArr.map((elem) => {
        if (elem.title === x) {
          return Object.assign(elem, { qnt: Number(elem.qnt) + 1 });
        }
        return elem;
      });
      this.setState({ buyListArr: newArr });
      this.props.updateLinkCart(1);
    } else {
      const obj = { title: x, price: y, thumbnail: z, qnt: 1 };
      const newArr = [...buyListArr, obj];
      this.props.updateLinkCart(1);
      this.setState({ buyListArr: newArr });
    }
  }

  render() {
    const { products, searchText, selectCategory } = this.props;
    if (searchText === '' && selectCategory === '') {
      return (
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      );
    }
    if (!products.results) return <h4>Nenhum Produto foi encontrado</h4>;
    return (
      <div>
        {products.results.map((product) => (
          <Product
            product={product}
            key={product.id}
            buyButton={() => this.buyButton(product.title, product.price, product.thumbnail)}
          />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })),
  }).isRequired,
  updateLinkCart: PropTypes.func.isRequired,
};

export default ProductList;
