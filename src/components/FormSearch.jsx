import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSearch extends Component {
  render() {
    const { onClick, onChange, value } = this.props;
    const MIN_CARACTER = 2;
    return (
      <div>
        <form>
          <input
            data-testid="search-artist-input"
            name="search"
            type="text"
            value={ value }
            onChange={ onChange }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ value.length < MIN_CARACTER }
            onClick={ onClick }
          >
            Pesquisar
          </button>
        </form>

      </div>
    );
  }
}
FormSearch.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default FormSearch;
