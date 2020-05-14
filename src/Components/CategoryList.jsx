import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories, onCategoryChange, selectCategory } = this.props;
    return (
      <div>
        <ul>
          <h1>Category List</h1>
          {categories.map(({ id, name }) => (
            <li key={id} data-testid="category">
              <label htmlFor={id}>
                <input
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

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  selectCategory: PropTypes.string.isRequired,
};

export default CategoryList;
