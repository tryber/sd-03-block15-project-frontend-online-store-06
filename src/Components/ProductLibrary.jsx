import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/api';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import CategoryList from './CategoryList';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changedCategory: false,
      searchText: '',
      selectCategory: '',
      products: {},
      categories: [],
    };
    this.findProducts = this.findProducts.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((error) => console.log('Não foi possível buscar as categorias por:', error));
  }

  componentDidUpdate() {
    if (this.state.changedCategory) this.findProducts();
  }

  textChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  categoryChange(event, name) {

    const { value } = event.target;
    this.setState({ [name]: value });
    this.findProducts();
  }

  categoryChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value, changedCategory: true });
  }

  findProducts() {
    const { searchText, selectCategory } = this.state;
    return api.getProductsFromCategoryAndQuery(selectCategory, searchText)
      .then((products) => this.setState({ products, changedCategory: false }));
  }

  render() {
    const { searchText, products, categories, selectCategory } = this.state;
    return (
      <div>
        <ProductList products={products} searchText={searchText} />
        <CategoryList
          categories={categories}
          selectCategory={selectCategory}
          onCategoryChange={(event) => this.categoryChange(event, 'selectCategory')}
        />
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.textChange(event, 'searchText')}
          onSubmit={() => this.findProducts()}
        />
        <ProductList products={products} searchText={searchText} />
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src="../images/carrinho.png" alt="cart-button" />
        </Link>
      </div>
    );
  }
}

export default ProductLibrary;
