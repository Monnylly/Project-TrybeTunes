import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListAlbum from './ListaAlbum';

class CardAlbum extends Component {
  render() {
    const { artista, albuns } = this.props;
    const respostaAlbuns = albuns.map((album) => (<ListAlbum
      key={ album.colletionId }
      album={ album }
    />));
    return (
      <div>
        <section>
          <p>
            { `Resultado de álbuns de: ${artista}`}
          </p>
          <div>
            { albuns.length === 0
              ? <span>Nenhum álbum foi encontrado</span> : respostaAlbuns }
          </div>
        </section>
      </div>
    );
  }
}
CardAlbum.propTypes = {
  artista: PropTypes.string,
  albuns: PropTypes.array,
}.isRequired;

export default CardAlbum;
