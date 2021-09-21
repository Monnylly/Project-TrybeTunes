import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListAlbum from './ListaAlbum';

class CardAlbum extends Component {
  render() {
    const { albuns, artist } = this.props;
    const respostaAlbuns = albuns.map((album) => (<ListAlbum
      key={ album.colletionId }
      album={ album }
    />));

    return (
      <div>
        <section>
          <div>
            <p>{`Resultado de álbuns de: ${artist}`}</p>
            <div>
              { albuns.length === 0
                ? <span>Nenhum álbum foi encontrado</span>
                : respostaAlbuns }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

CardAlbum.propTypes = {
  search: PropTypes.string,
  albuns: PropTypes.array,
}.isRequired;

export default CardAlbum;
