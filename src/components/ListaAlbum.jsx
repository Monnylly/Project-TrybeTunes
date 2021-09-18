import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListAlbum extends Component {
  render() {
    const { album: { collectionId, coletionName } } = this.props;
    // console.log(collectionId);
    return (
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        { coletionName }
      </Link>

    );
  }
}
ListAlbum.propTypes = {
  album: PropTypes.shape({ coletionName: PropTypes.string,
    collectionId: PropTypes.string }),
}.isRequeride;

export default ListAlbum;
