import React from 'react';

import * as api from '../services/api';
import * as generalFunc from '../services/generalFunc';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import LinkToCart from './LinkToCart';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryChanged: false,
      searchText: '',
      selectCategory: '',
      products: {},
      categories: [],
      unitsInCart:  generalFunc.unitsInCart(),
    };
    this.findProducts = this.findProducts.bind(this);
    this.updateLinkCart = generalFunc.updateLinkCart.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((error) => console.log('Não foi possível buscar as categorias por:', error));
  }

  componentDidUpdate() {
    const { categoryChanged } = this.state;
    if (categoryChanged) {
      this.findProducts();
    }
  }

  textChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  categoryChange(event, name) {
    const { value } = event.target;
    this.setState({
      [name]: value,
      categoryChanged: true,
    });
  }

  async findProducts() {
    const { searchText, selectCategory } = this.state;
    return api.getProductsFromCategoryAndQuery(selectCategory, searchText)
      .then((products) => this.setState({ products, categoryChanged: false }));
  }

  render() {
    const { searchText, products, categories, selectCategory, unitsInCart } = this.state;
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
          onSubmit={() => this.findProducts()}
        />
        <ProductList
          products={products}
          searchText={searchText}
          selectCategory={selectCategory}
          updateLinkCart={this.updateLinkCart}
        />
        <LinkToCart unitsInCart={unitsInCart} />
      </div>
    );
  }
}

export default ProductLibrary;
