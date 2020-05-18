import React from 'react';

import * as api from '../services/api';
import * as generalFunc from '../services/generalFunc';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import LinkToCart from './LinkToCart';
import AsideButton from './AsideButton';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryChanged: false,
      searchText: '',
      selectCategory: '',
      products: {},
      categories: [],
      unitsInCart: generalFunc.unitsInCart(),
      asideButtonArr: [],
    };
    this.findProducts = this.findProducts.bind(this);
    this.updateLinkCart = generalFunc.updateLinkCart.bind(this);
    this.updateaSideButtonArr = this.updateaSideButtonArr.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((error) => console.log('Não foi possível buscar as categorias por:', error));
    this.updateaSideButtonArr();
  }

  componentDidUpdate() {
    const { categoryChanged } = this.state;
    if (categoryChanged) {
      this.findProducts();
    }
  }

  updateaSideButtonArr() {
    const asideButtonArr = JSON.parse(localStorage.getItem('buyList'));
    this.setState({ asideButtonArr });
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
    const {
      searchText, products, categories,
      selectCategory, unitsInCart, asideButtonArr,
    } = this.state;
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
          updateaSideButtonArr={this.updateaSideButtonArr}
        />
        <LinkToCart unitsInCart={unitsInCart} />
        <AsideButton asideButtonArr={asideButtonArr} />
      </div>
    );
  }
}

export default ProductLibrary;
