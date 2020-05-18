import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, onSubmit } = this.props;
    return (
      <form className='bar'>
        <label htmlFor="searchText">
          <input
            value={searchText}
            name="searchText"
            data-testid="query-input"
            onChange={onSearchTextChange}
            type="text"
            className="searchBar"
          />
        </label>
        <button type="button" data-testid="query-button" onClick={onSubmit}>
          Search
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
