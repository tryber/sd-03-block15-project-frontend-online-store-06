import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

class ProductList extends React.Component {
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
        {products.results.map((product) => (<Product product={product} key={product.id} />))}
      </div>
    );
  }
}

ProductList.defaultProps = { product: PropTypes.object };

ProductList.propTypes = {
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })),
  }).isRequired,
};

export default ProductList;
