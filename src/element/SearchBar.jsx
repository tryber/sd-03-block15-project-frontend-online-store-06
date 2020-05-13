import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, onSubmit } = this.state;
    return (
      <form>
        <label htmlFor="searchText">
          <input
            value={searchText}
            name="searchText"
            data-testid="query-input"
            onCategoryChange={onSearchTextChange}
            type="text"
          />
        </label>
        <button type="button" data-testid="query-button" onClick={onSubmit()}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
