/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    // const CARACTER_MIN = 2;
    // const { name } = this.state;
    return (
      <section>
        <Header />
        <div
          id="search"
          data-testid="page-search"
        >
          Search
        </div>
        <form>
          <input data-testid="search-artist-input" />
          <button
            data-testid="search-artist-button"
            type="submit"
            // disabled={ name.length < CARACTER_MIN }
          >
            Pesquisar
          </button>
        </form>
      </section>
    );
  }
}

export default Search;
