import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <div
          id="album"
          data-testid="page-album"
        >
          Album
        </div>
      </section>
    );
  }
}

export default Album;
