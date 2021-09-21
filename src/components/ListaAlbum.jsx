import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListAlbum extends Component {
  render() {
    const { album: { collectionId, collectionName } } = this.props;
    return (
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        { collectionName }
      </Link>

    );
  }
}
ListAlbum.propTypes = {
  albuns: PropTypes.shape({ collectionName: PropTypes.string,
    collectionId: PropTypes.string }),
}.isRequeride;

export default ListAlbum;
