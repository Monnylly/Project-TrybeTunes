/* eslint-disable react/sort-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      loading: true,
      favorites: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getMusics = this.getMusics.bind(this);
    this.getFavoriteSongs = this.getFavoriteSongs.bind(this);
  }

  componentDidMount() {
    this.getMusics();
    this.getFavoriteSongs();
  }

  handleChange({ target }, musics) {
    const songNew = target.checked ? addSong : removeSong;
    this.setState({ loading: true }, async () => {
      await songNew(musics);
      this.getFavoriteSongs();
    });
  }

  async getMusics() {
    const { match: { params: { id } } } = this.props;
    this.setState(async () => {
      const musics = await getMusics(id);
      this.setState({ musics });
    });
  }

  getFavoriteSongs() {
    this.setState({ loading: true }, async () => {
      const favorites = await getFavoriteSongs();
      this.setState({ favorites, loading: false });
    });
  }

  render() {
    const { musics, loading, favorites } = this.state;
    const fistMusic = musics[0];
    if (loading) {
      return (
        <main>
          <Header />
          <Loading />
        </main>
      );
    }
    return (
      <main
        data-testid="page-album"
      >
        <Header />
        <div>
          <h3
            data-testid="artist-name"
          >
            { fistMusic.artistName }
          </h3>
          <h3 data-testid="album-name">
            { fistMusic.collectionName }
          </h3>
        </div>
        <section>
          { musics.slice(1).map((music) => (<MusicCard
            key={ music.trackId }
            musics={ music }
            checked={ favorites.some((favorite) => favorite.trackId === music.trackId) }
            onChange={ this.handleChange }
          />))}
        </section>
      </main>
    );
  }
}

Album.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      collectionName: PropTypes.string,
      artistName: PropTypes.string,
    }),
  }),
}.isRequired;

export default Album;
