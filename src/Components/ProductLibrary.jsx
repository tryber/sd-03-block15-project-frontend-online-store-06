import React from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import * as api from '../services/api';
import CategoryList from './CategoryList';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectCategory: '',
      products: [],
      categories: [],
    };
    this.findProducts = this.findProducts.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((error) => console.log('Não foi possível buscar as categorias por:', error));
  }

  textOrCategoryChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  findProducts() {
    const { searchText, selectCategory } = this.state;
    return api.getProductsFromCategoryAndQuery(selectCategory, searchText)
      .then((products) => this.setState({ products }));
  }

  render() {
    const { searchText, products, categories, selectCategory } = this.state;
    console.log(searchText);
    return (
      <div>
        <CategoryList
          categories={categories}
          selectCategory={selectCategory}
          onCategoryChange={(event) => this.textOrCategoryChange(event, 'selectCategory')}
        />
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.textOrCategoryChange(event, 'searchText')}
          onSubmit={() => this.findProducts()}
        />
        <ProductList products={products} searchText={searchText} />
      </div>

    );
  }
}

export default ProductLibrary;
