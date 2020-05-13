import React from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import * as api from '../services/api';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ' ',
      selectCategory: ' ',
      products: [],
    };
    this.findProducts = this.findProducts.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(value) {
    this.setState(() => ({ searchText: value }));
  }

  textChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  findProducts() {
    const { searchText, selectCategory } = this.state;
    return api.getProductsFromCategoryAndQuery(selectCategory, searchText)
      .then((products) => this.setState({ products }));
  }

  render() {
    const { searchText, products } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.textChange(event, 'searchText')}
          onSubmit={() => this.findProducts()}
        />
        <ProductList products={products} searchText={searchText} />
      </div>
    );
  }
}

export default ProductLibrary;
