import React, { Component } from 'react';

class SearchBeer extends Component {
  state = {
    search: '',
  };

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    this.props.filterBeers(search);
    this.setState({ search: '' });
  };
  render() {
    const { search } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input
            style={{
              border: '1px solid black',
              width: '400px',
              borderRadius: '20px',
            }}
            type="text"
            name="search"
            value={search}
            onChange={this.handleInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBeer;
