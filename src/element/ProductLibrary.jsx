import React from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  handleSubmit(value) {
    this.setState(() => ({ searchText: value }));

  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.handleSubmit(event, 'searchText')}
        />
        <h4 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h4>

        <ProductList />
      </div>
    );
  }
}

export default ProductLibrary;