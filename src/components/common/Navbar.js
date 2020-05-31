import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

//Actions
import { logoutUser } from 'actions/auth.action';

// Assets
import Logo from 'assets/logo-white.png';

// UI
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

class Navbar extends Component {
  render() {
    const { auth, logoutUser } = this.props;
    return (
      <BootstrapNavbar bg='dark' variant='dark'>
        <BootstrapNavbar.Brand href='#/'>
            <img
              src={Logo}
              width='40'
              height='40'
              alt='Janani Home Logo'
            />
        </BootstrapNavbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#/'>Home</Nav.Link>
          <Nav.Link href='#volunteers'>Volunteers</Nav.Link>
          <Nav.Link href='#announcements'>Announcements</Nav.Link>
          <Nav.Link href='#events'>Events</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#guidelines'>Guidelines</Nav.Link>
        </Nav>
        <Nav>
          {!auth.isAuthenticated ? (
            <Fragment>
              <Nav.Link href='#login'>Login</Nav.Link>
              <Nav.Link href='#register'>Register</Nav.Link>
            </Fragment>
          ) : (
            <Fragment>
              <Nav.Link href={`#user/${auth.user.username}`}>Dashboard</Nav.Link>
              <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
            </Fragment>
          )}
        </Nav>
      </BootstrapNavbar>
    );
  }
}

export default connect(mapStateToProps, { logoutUser })(Navbar);
