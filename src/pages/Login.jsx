// import { func } from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
      logged: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleonClick = this.handleonClick.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  // auxilio do Matheus Conrrado
  handleonClick = async () => {
    // event.preventDefault();
    const { name, email, image, description } = this.state;
    this.setState({ loading: true });
    await createUser({ name, email, image, description })
      .then(() => {
        this.setState({ loading: false, logged: true });
      });
  }

  render() {
    const CARACTER_MIN = 3;
    const { name, loading, logged } = this.state;
    if (loading) return <Loading />;
    if (logged) return <Redirect to="/search" />;
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
              // value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
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
