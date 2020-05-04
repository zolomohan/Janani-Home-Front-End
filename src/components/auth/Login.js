import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  onChange = (event) => this.setState({ [event.target.id]: event.target.value });
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  };

  render() {
    return (
      <div className='container my-5'>
        <h1>Login</h1>
        <hr />
        <form className='mt-5' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='username' className='lead'>
              Username
            </label>
            <input
              id='username'
              type='text'
              className='form-control'
              onChange={this.onChange}
              value={this.state.username}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password' className='lead'>
              Password
            </label>
            <input
              id='password'
              type='password'
              className='form-control'
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>
          <button type='submit' className='btn btn-primary px-5 mt-3'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
