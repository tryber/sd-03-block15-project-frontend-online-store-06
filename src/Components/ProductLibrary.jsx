import React from 'react';

import * as api from '../services/api';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import CategoryList from './CategoryList';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  textChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  categoryChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
    this.findProducts('category');
  }

  findProducts(str) {
    console.log(str);
    const { searchText, selectCategory } = this.state;
    return api.getProductsFromCategoryAndQuery(selectCategory, searchText)
      .then((products) => this.setState({ products }));
  }

  render() {
    const { searchText, products, categories, selectCategory } = this.state;
    return (
      <div>
        <CategoryList
          categories={categories}
          selectCategory={selectCategory}
          onCategoryChange={(event) => this.categoryChange(event, 'selectCategory')}
        />
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.textChange(event, 'searchText')}
          onSubmit={() => this.findProducts('searchText')}
        />
        <ProductList products={products} searchText={searchText} />
      </div>
    );
  }
}

export default ProductLibrary;
