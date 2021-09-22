import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const { musics, onChange } = this.props;
    onChange(event, musics);
  }

  render() {
    const { musics, checked } = this.props;
    const { trackName, previewUrl, trackId } = musics;
    return (
      <section>
        <h2>{ trackName }</h2>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento.
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            type="checkbox"
            checked={ checked }
            id={ trackId }
            value={ musics }
            onChange={ this.handleChange }
          />
        </label>
      </section>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;

export default MusicCard;
