import React, { Component } from 'react';

import SignupForm from './SignupForm';

class SignupPage extends Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-4 m-auto">
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default SignupPage;
