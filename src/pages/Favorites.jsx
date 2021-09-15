import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <section>
        <Header />
        <div
          id="favorites"
          data-testid="page-favorites"
        >
          Favoritos
        </div>
      </section>
    );
  }
}

export default Favorites;
