/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumApi from '../services/searchAlbumsAPI';
import FormSearch from '../components/FormSearch';
// eslint-disable-next-line import/no-named-as-default
import CardAlbum from '../components/cardAlbum';

// import { Link } from 'react-router-dom';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      habilit: true,
      loading: false,
      albuns: [],
      artista: '',
      shouldShow: false,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.clearResposta = this.clearResposta.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillUnmount() {
  //   this.clearResposta();
  // }

  // handleClick(event) {
  //   event.preventDefault();
  //   const { search, artistName } = this.state;
  //   const result = searchAlbumsApi(search, artistName);
  //   this.setState({ loading: true,
  //   }, () => {
  //     result(search, artistName).then((resposta) => {
  //       this.setState({
  //         loading: false,
  //         resposta: result,
  //         search: '',
  //         artistName: '',
  //       });
  //     });
  //   });
  // }

  async handleClick() {
    // event.preventDefault();
    const { search } = this.state;
    const artista = search;
    this.setState = {
      // search: '',
      loading: true,
      artista,
    };
    const albuns = await searchAlbumApi(artista);
    // console.log(respostaApi);

    this.setState = {
      // resposta: respostaApi,
      albuns,
      search: '',
      loading: false,
      shouldShow: true,
    };
    console.log(search);
  }

  // handleChange({ target }) {
  //   const { value } = target;
  //   this.setState({
  //     search: value,
  //   });
  // }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }
  // clearResposta() {
  //   this.setState = ({
  //     resposta: null,
  //   });
  // }

  render() {
    const { search, loading, albuns, artista, shouldShow, habilit } = this.state;
    return (
      <main
        id="search"
        data-testid="page-search"
      >
        <Header />
        {loading ? <Loading /> : <FormSearch
          value={ search }
          habilit={ habilit }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />}

        { shouldShow && <CardAlbum
          artista={ artista }
          albuns={ albuns }
        />}
      </main>
    );
  }
}

export default Search;
