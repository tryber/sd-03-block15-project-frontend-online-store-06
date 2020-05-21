import React from 'react';
import PropTypes from 'prop-types';
import './CategoryList.css';

function CategoryList(props) {
  const { categories, onCategoryChange, selectCategory } = props;
  return (
    <div className="CategoryList">
      <h2>Category List:</h2>
      <ul>
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

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  selectCategory: PropTypes.string.isRequired,
};

export default CategoryList;
