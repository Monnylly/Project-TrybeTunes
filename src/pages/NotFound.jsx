import React, { Component } from 'react';
import Header from '../components/Header';

class NotFund extends Component {
  render() {
    return (
      <div
        id="notFound"
        data-testid="page-not-found"
      >
        <Header />
      </div>
    );
  }
}

export default NotFund;
