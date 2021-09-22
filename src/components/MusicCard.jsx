import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class MusicCard extends Component {
  render() {
    const { musics } = this.props;
    const songs = musics.slice(1);
    const fistMusic = musics[0];

    if (musics.length === 0) return <Loading />;
    return (
      <section>
        <p data-testid="artist-name">{fistMusic.artistName}</p>
        <p data-testid="album-name">{fistMusic.collectionName}</p>

        {songs.map((music) => (
          <div key={ music.trackId }>
            <p>{music.trackName}</p>

            <audio data-testid="audio-component" src={ music.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento.
              {' '}
              <code>audio</code>
              .
            </audio>
          </div>
        ))}
      </section>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.array,
}.isRequired;

export default MusicCard;

// constructor() {
//   super();
//   this.handleChange = this.handleChange.bind(this);
// }

// async handleChange(event) {
//   const { music, onChange } = this.props;
//   onChange(event, music);
// }

// render() {
//   const { music, checked } = this.props;
//   const { trackName, previewUrl, trackId } = music;
//   return (
//     <section>
//       <h2>{ trackName }</h2>
//       <audio data-testid="audio-component" src={ previewUrl } controls>
//         <track kind="captions" />
//         O seu navegador não suporta o elemento.
//         {' '}
//         <code>audio</code>
//         .
//       </audio>
//       <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
//         Favorita
//         <input
//           type="checkbox"
//           checked={ checked }
//           id={ trackId }
//           value={ music }
//           onChange={ this.handleChange }
//         />
//       </label>
//     </section>
//   );
// }
// }
// MusicCard.propTypes = {
//   trackName: PropTypes.string,
//   previewUrl: PropTypes.string,
// }.isRequired}
