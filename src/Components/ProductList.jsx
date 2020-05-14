import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    if (products.results) {
      if (products.results.length === 0) return <h4>Nenhum Produto foi encontrado</h4>;
      return (
        <div>
          {products.results.map((product) => (<Product product={product} key={product.id} />))}
        </div>
      );
    }
    return (
      <h4 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h4>
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
