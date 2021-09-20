import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListAlbum from './ListaAlbum';

class CardAlbum extends Component {
  render() {
    const { albuns } = this.props;
    const respostaAlbuns = albuns.map((album) => (<ListAlbum
      key={ album.colletionId }
      album={ album }
    />));
    const [nameArtist] = albuns;

    return (
      <div>
        <section>
          <div>
            { albuns.length === 0
              ? <span>Nenhum álbum foi encontrado</span>
              : (
                <>
                  {`Resultado de álbuns de: ${nameArtist.artistName}`}
                  { respostaAlbuns }
                </>
              )}
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
