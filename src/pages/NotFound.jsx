import React, { Component } from 'react';
import Header from '../components/Header';

class NotFund extends Component {
  render() {
    return (
      <section>
        <Header />
        <div
          id="notFound"
          data-testid="page-not-found"
        >
          NotFound
        </div>
      </section>
    );
  }
}

export default NotFund;
