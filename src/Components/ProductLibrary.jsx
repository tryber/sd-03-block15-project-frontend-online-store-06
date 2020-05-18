import React from 'react';

import * as api from '../services/api';
import * as generalFunc from '../services/generalFunc';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import LinkToCart from './LinkToCart';
import './ProductLibrary.css';

class ProductLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryChanged: false,
      searchText: '',
      selectCategory: '',
      products: [],
      categories: [],
      order: '',
      oldOrder: {},
      unitsInCart: generalFunc.unitsInCart(),
    };
    this.findProducts = this.findProducts.bind(this);
    this.updateLinkCart = generalFunc.updateLinkCart.bind(this);
  }

  componentDidMount() {
    api
      .getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((error) =>
        console.log('Não foi possível buscar as categorias por:', error)
      );
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

  orderChange(event, name) {
    const { products, oldOrder } = this.state;
    const { value } = event.target;
    if (value === 'Incresing') {
      console.log(products);
      const newOrder = products.sort((a, b) => a.price - b.price);
      this.setState({
        [name]: value,
        products: newOrder,
      });
    }
    if (value === 'Decreasing') {
      const newOrder = products.sort((a, b) => b.price - a.price);
      this.setState({
        [name]: value,
        products: newOrder,
      });
    }
    if (value === '') {
      this.setState({
        [name]: value,
        products: oldOrder,
      });
    }
  }

  orderOfSearch() {
    const { order } = this.state;
    return (
      <select
        value={order}
        onChange={(event) => this.orderChange(event, 'order')}
      >
        <option value="">Ordenar por:</option>
        <option value="Incresing">Crescente</option>
        <option value="Decreasing">Decrescente</option>
      </select>
    );
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
    return api
      .getProductsFromCategoryAndQuery(selectCategory, searchText)
      .then((elem) =>
        this.setState({
          products: elem.results,
          categoryChanged: false,
          oldOrder: elem.results,
        })
      );
  }

  render() {
    const { searchText, products, categories, selectCategory, unitsInCart, } = this.state;
    return (
      <div>
        <header>
          <h4 className="title">
            THE <br /> CODENATOR'S <br /> MARKET
          </h4>
          <LinkToCart unitsInCart={unitsInCart} />
          <SearchBar searchText={searchText} onSearchTextChange={(event) => this.textChange(event, 'searchText')} onSubmit={() => this.findProducts()} />
                  {this.orderOfSearch()}
        </header>
        <CategoryList categories={categories} selectCategory={selectCategory} onCategoryChange={(event) => this.categoryChange(event, 'selectCategory')
          }
        />
        <ProductList products={products} searchText={searchText} selectCategory={selectCategory} updateLinkCart={this.updateLinkCart} />
      </div>
    );
  }
}

export default ProductLibrary;
