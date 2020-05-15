import React from 'react';
import PropTypes from 'prop-types';

function CategoryList(props) {
  const { categories, onCategoryChange, selectCategory } = props;
  return (
    <div>
      <h1>Category List</h1>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <label htmlFor={id}>{name}</label>
              <input
                data-testid="category"
                type="radio"
                id={id}
                value={id}
                name="categories"
                checked={selectCategory === id}
                onChange={onCategoryChange}
              />
          </li>
        ))}
      </ul>
    </div>
  );
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
