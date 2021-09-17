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
      resposta: [],
      artista: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearResposta = this.clearResposta.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.clearResposta();
  }

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

  async handleClick(event) {
    event.preventDefault();
    const { search } = this.state;
    this.setState = {
      search: '',
      loading: true,
    };
    const respostaApi = await searchAlbumApi(search);
    console.log(respostaApi);

    this.setState = {
      resposta: respostaApi,
      loading: false,
    };
    console.log(search);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      search: value,
    });
  }

  clearResposta() {
    this.setState = ({
      resposta: null,
    });
  }

  render() {
    const { search, loading, habilit, resposta, artista } = this.state;
    console.log(search, "search linha 79");
    return (
      <div
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

        { resposta && <CardAlbum
          artista={ artista }
          resposta={ resposta }
        />}
      </div>
    );
  }
}

export default Search;
