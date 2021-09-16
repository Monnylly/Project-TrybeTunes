import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSearch extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      search: value,
    });
  }

  render() {
    const MIN_CARACTER = 2;
    const { handleClick } = this.props;
    const { search } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="search-artist-input"
            name="search"
            type="text"
            value={ search }
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            disabled={ search.length < MIN_CARACTER }
            onClick={ handleClick }
          >
            Pesquisar
          </button>
        </form>

      </div>
    );
  }
}
FormSearch.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  enable: PropTypes.bool,
  search: PropTypes.string,
}.isRequired;

export default FormSearch;
