import React from 'react';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    api.getCategories()
      .then((categories) => this.setState({ categories }))
      .catch((error) => console.log('Não foi possível buscar as categorias por:', error));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          <h1>Category List</h1>
          {categories.length && categories.map(({ id, name }) =>
            <li key={id} data-testid="category" id={id}>{name}</li>)}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
