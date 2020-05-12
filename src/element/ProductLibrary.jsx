import React from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import * as api from './services/api';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
    };
  }

  componentDidMount {
    
  }

  handleSubmit(value) {
    this.setState(() => ({ searchText: value }));
  }

  render() {
    const { searchText, products } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSubmit={(event) => this.handleSubmit(event, 'searchText')}
        />
        <h4 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h4>

        <ProductList products={products} />
      </div>
    );
  }
}

export default ProductLibrary;