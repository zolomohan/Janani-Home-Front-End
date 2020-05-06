import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from 'actions/auth.action';

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <Link className='navbar-brand' to='/'>
          Janani Home
        </Link>
        <ul className='navbar-nav ml-auto'>
          {this.props.auth.isAuthenticated && (
            <Link className='nav-link' to='/post/new'>
              New Post
            </Link>
          )}
        </ul>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {this.props.auth.isAuthenticated ? (
              <Fragment>
                <li className='nav-item navbar-text mr-3'>
                  Welcome, {this.props.auth.user.username}
                </li>
                <li className='nav-item'>
                  <a className='nav-link' onClick={this.props.logoutUser}>
                    Logout
                  </a>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, { logoutUser })(Header);
