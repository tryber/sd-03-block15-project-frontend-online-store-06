import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories, onCategoryChange, selectCategory } = this.props;
    return (
      <div>
        <ul>
          <h1>Category List</h1>
          {categories.map(({ id, name }) => (
            <li key={id}>
              <label htmlFor={id}>
                <input
                  data-testid="category"
                  type="radio"
                  id={id}
                  value={id}
                  name="categories"
                  checked={selectCategory === id}
                  onChange={onCategoryChange}
                />
                {name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
