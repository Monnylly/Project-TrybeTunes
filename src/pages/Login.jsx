// import { func } from 'prop-types';
import React from 'react';
import Loading from '../component/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       loading: false,
//     };
//   }

  //   onChange() {
  //     const CARACTER_MIN = 3;
  //     if (loading ? <Loading/> && )
  //   }

  render() {
    // const { name, loading } = this.state;
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
            />
          </label>
          <button
            id="button"
            name="button"
            data-testid="login-submit-button"
            type="submit"
            onClick={ createUser }
            // disabled= { habilitaBotton }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
