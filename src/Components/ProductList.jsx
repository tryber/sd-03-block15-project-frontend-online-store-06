import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    const { products, searchText } = this.props;
    if (searchText === '') {
      return (
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      );
    }
    console.log(products)
    if (!products.results) return <h4>Nenhum Produto foi encontrado</h4>;
    return (
      <div>
        {products.results.map((product) => (<Product product={product} key={product.id} />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })),
  }).isRequired,
  searchText: PropTypes.string.isRequired,
};

export default ProductList;
