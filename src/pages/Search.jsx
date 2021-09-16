/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsApi from '../services/searchAlbumsAPI';
import FormSearch from '../components/FormSearch';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      // curtArtist: '',
      search: '',
      habilit: true,
      loading: false,
      resposta: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ event }) {
    const { value } = event.target;
    const MIN_CARACTER = 2;
    this.setState({
      search: value,
    }, () => {
      this.setState((state) => ({
        habilit: state.search.length >= MIN_CARACTER,
      }));
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { search } = this.state;
    this.setState({ loading: true,
    }, () => {
      searchAlbumsApi(search).then((resposta) => {
        this.setState({
          loading: false,
          resposta,
          search: '',
          curtArtist: search,
        });
      });
    });
  }

  render() {
    const { search, loading, habilit, resposta, curtArtist } = this.state;
    return (
      <div
        id="search"
        data-testid="page-search"
      >
        <Header />
        {loading ? <Loading /> : <FormSearch
          search={ search }
          habilit={ habilit }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleClick }
        />}
        {/* { resposta && <ListAlbum
          search={ curtArtist }
          resposta={ resposta }
        /> } */}
      </div>
    );
  }
}

export default Search;
