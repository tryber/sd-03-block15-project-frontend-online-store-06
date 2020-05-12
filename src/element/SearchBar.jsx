import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    const { searchText } = this.state;
    onSubmit(searchText);
  }

  textChange(name, event) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { searchText } = this.state;
    return (
      <form>
        <label htmlFor="searchText">
          <input value={searchText} name="searchText" data-testid="query-input" onChange={(event) => this.textChange('searchText', event)} type="text" />
        </label>
        <button type="button" data-testid="query-button" onClick={this.handleSubmit}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
