import React, { Component } from 'react';
import map from 'lodash/map';

import timezones from '../../data/timezone';

class SignupForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    timezone: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { username, email, password, passwordConfirmation, timezone } = this.state;

    const options = map(timezones, (val, key) => (
      <option key={val} value={val}>
        {key}
      </option>
    ));

    return (
      <form onSubmit={this.onSubmit}>
        <h1 className="display-4 text-center">Join our community!</h1>

        <div className="form-group">
          <label htmlFor="username" className="control-label">
            Username
          </label>
          <input type="text" name="username" className="form-control" value={username} onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="control-label">
            Email
          </label>
          <input type="text" name="email" className="form-control" value={email} onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="control-label">
            Password
          </label>
          <input type="text" name="password" className="form-control" value={password} onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="passwordConfirmation" className="control-label">
            Password Confirmation
          </label>
          <input
            type="text"
            name="passwordConfirmation"
            className="form-control"
            value={passwordConfirmation}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="timezone" className="control-label">
            Timezone
          </label>
          <select name="timezone" className="form-control" value={timezone} onChange={this.onChange}>
            <option value="" disabled>
              Choose Your Timezone
            </option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
