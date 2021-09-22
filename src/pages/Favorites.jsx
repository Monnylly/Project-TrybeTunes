import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      favorites: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getFavoriteSongs = this.getFavoriteSongs.bind(this);
  }

  componentDidMount() {
    this.getFavoriteSongs();
  }

  handleChange(event, music) {
    this.setState({ loading: true }, async () => {
      await removeSong(music);
      this.getFavoriteSongs();
    });
  }

  async getFavoriteSongs() {
    const favorites = await getFavoriteSongs();
    this.setState({ favorites, loading: false });
  }

  render() {
    const { favorites, loading } = this.state;
    if (loading) {
      return (
        <section>
          <Header />
          <Loading />
        </section>
      );
    }

    return (
      <section data-testid="page-favorites">
        <Header />
        { favorites.map((music, index) => (
          <MusicCard
            key={ index }
            music={ music }
            checked={ favorites.some((favorite) => favorite.trackId === music.trackId) }
            onChange={ this.handleChange }
          />
        ))}
      </section>
    );
  }
}

export default Favorites;
