import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

import SignupForm from './SignupForm';

class SignupPage extends Component {
  state = {};

  render() {
    const { userSignupRequest } = this.props; // eslint-disable-line

    return (
      <div className="row">
        <div className="col-md-offset-4 m-auto">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { userSignupRequest }
)(SignupPage);
