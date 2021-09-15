// import { func } from 'prop-types';
import React from 'react';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleonClick = this.handleonClick.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log(event.type);
  }

  handleonClick(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {
      createUser({
        name: 'Name',
        email: '',
        image: '',
        description: '',
      });
    });
  }

  render() {
    const CARACTER_MIN = 3;
    const { name, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <section>
        <div
          id="login"
          data-testid="page-login"
        >
          Login
        </div>
        <form>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              data-testid="login-name-input"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <button
            id="button"
            name="button"
            data-testid="login-submit-button"
            type="submit"
            onClick={ this.handleonClick }
            disabled={ name.length < CARACTER_MIN }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
