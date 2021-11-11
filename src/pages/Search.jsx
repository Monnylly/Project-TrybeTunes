/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumApi from '../services/searchAlbumsAPI';
import FormSearch from '../components/FormSearch';
import CardAlbum from '../components/cardAlbum';
import Loading from '../components/Loading';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      habilit: true,
      loadingApi: false,
      albuns: [],
      mostra: false,
      // dica Mateus estado mostra ou shouldShow
      artist: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = async () => {
    const { search } = this.state;
    const artist = search;
    this.setState({
      loadingApi: true,
      artist,
    });
    const albuns = await searchAlbumApi(artist);

    this.setState({
      albuns,
      search: '',
      loadingApi: false,
      mostra: true,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { search, albuns, artist, habilit, loadingApi, mostra } = this.state;
    return (
      <main
        id="search"
        data-testid="page-search"
      >
        <Header />
        { loadingApi ? <Loading /> : <FormSearch
          value={ search }
          habilit={ habilit }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />}

        { mostra && <CardAlbum
          artist={ artist }
          albuns={ albuns }
        />}
      </main>
    );
  }
}

export default Search;
