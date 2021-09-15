import React, { Component } from 'react';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <section>
        <Header />
        <div
          data-testid="page-profile-edit"
        >
          Profile Edite
        </div>
      </section>
    );
  }
}

export default ProfileEdit;
