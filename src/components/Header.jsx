/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userDados: {},
    };
    this.infUser = this.infUser.bind(this);
  }

  componentDidMount() {
    this.infUser();
  }

  infUser() {
    this.setState({ loading: true }, async () => {
      const dados = await getUser();
      this.setState({
        userDados: { ...dados },
        loading: false,
      });
    });
  }

  render() {
    const { userDados: { name }, loading } = this.state;
    return (
      <section>
        <header data-testid="header-component">
          <nav>
            <Link to="/search" data-testid="link-to-search"> Search </Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
            <Link to="/profile" data-testid="link-to-profile">Profile</Link>
          </nav>
          <span data-testid="header-user-name">
            { loading ? <Loading /> : name }
          </span>
        </header>
      </section>
    );
  }
}

export default Header;
