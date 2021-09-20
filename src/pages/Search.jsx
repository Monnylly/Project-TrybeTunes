/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumApi from '../services/searchAlbumsAPI';
import FormSearch from '../components/FormSearch';
import CardAlbum from '../components/cardAlbum';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      habilit: true,
      loadingApi: false,
      albuns: [],
    };
    this.handleClick = this.handleClick.bind(this);
    // this.clearResposta = this.clearResposta.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = async () => {
    const { search } = this.state;
    this.setState({
      loadingApi: true,
    });
    const albunsApi = await searchAlbumApi(search);

    this.setState({
      albuns: albunsApi,
      search: '',
      loadingApi: false,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { search, albuns, artista, habilit, loadingApi } = this.state;
    return (
      <main
        id="search"
        data-testid="page-search"
      >
        <Header />
        <FormSearch
          value={ search }
          habilit={ habilit }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />

        { loadingApi || <CardAlbum
          artista={ artista }
          albuns={ albuns }
        />}
      </main>
    );
  }
}

export default Search;
