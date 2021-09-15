import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <section>
        <Header />
        <div
          id="search"
          data-testid="page-search"
        >
          Search
        </div>
      </section>
    );
  }
}

export default Search;
