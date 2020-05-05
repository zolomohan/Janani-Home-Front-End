import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.isAuthenticated) return <Redirect to='/login' />;
        else return <Component {...props} />;
      }}
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
