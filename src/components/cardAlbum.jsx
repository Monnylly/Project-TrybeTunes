import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListAlbum from './ListaAlbum';

export class CardAlbum extends Component {
  render() {
    const { artista, resposta } = this.props;
    const respostaAlbuns = resposta.map((album) => (<ListAlbum
      key={ album.colletionId }
      album={ album }
    />));
    return (
      <div>
        <section>
          <p>
            { `Resultado de albuns de: ${artista}`}
          </p>
          <div>
            { resposta.length === 0
              ? <span>Nenhum album foi encontrado</span> : respostaAlbuns }
          </div>
        </section>
      </div>
    );
  }
}
CardAlbum.propTypes = {
  artista: PropTypes.string,
  resposta: PropTypes.array,
}.isRequired;

export default CardAlbum;
