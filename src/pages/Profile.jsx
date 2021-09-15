import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <section>
        <Header />
        <div
          id="profile"
          data-testid="page-profile"
        >
          Profile
        </div>
      </section>
    );
  }
}

export default Profile;
